import React, { useState } from "react";
import ProductRow from "../../presentation/ProductRow";
import PriceSection from "../../presentation/PriceSection";
import Button from "../../presentation/Button";
import axios from "axios";
import "./MyCart.scss";

/**
 *
 * @param {*} props
 * My Cart Component for handling cart data
 */

const MyCart = (props) => {
  const {
    summaryDesc,
    columnLabels,
    currency,
    products,
    labels,
    vatPer,
    ctaLabel,
    endPointUrl,
  } = props;
  const getSubTotalPrice = (prods) => {
    let sum = 0;
    prods &&
      prods.forEach((item) => {
        sum += item.quantity * item.price;
      });
    return sum;
  };

  const [cartProducts, setCartProducts] = useState(products);
  const [subTotalPrice, setSubTotalPrice] = useState(
    getSubTotalPrice(products)
  );
  const description =
    summaryDesc && summaryDesc.replace("{0}", cartProducts.length);

  const vatAmount = parseFloat((subTotalPrice * vatPer) / 100).toFixed(2);
  const totalAmount = parseFloat(
    subTotalPrice + (subTotalPrice * vatPer) / 100
  ).toFixed(2);

  /**
   *
   * @param {*} obj  as Object ,with quantity and productId
   */
  const handleInputChange = (obj) => {
    if (obj) {
      const id = obj.productId;
      const quantity = obj.quantity ? obj.quantity : 0;
      const prods = cartProducts.map((item) => {
        if (item.productId === id) {
          return {
            ...item,
            quantity: parseInt(quantity),
          };
        }
        return item;
      });
      setCartProducts(prods);
      setSubTotalPrice(getSubTotalPrice(prods));
    }
  };

  /**
   *
   * @param {*} id as productId
   * handle deletion of products from cart
   */

  const handleDelete = (id) => {
    const prods = cartProducts.filter((item) => item.productId !== id);
    setCartProducts(prods);
    setSubTotalPrice(getSubTotalPrice(prods));
  };

  /**
   * Posting the cart data to API end point
   */
  const handleButtonClick = () => {
    const params = {
      products: cartProducts,
      vat: vatAmount,
      subTotal: subTotalPrice,
      gross: totalAmount,
    };
    axios
      .post(endPointUrl, params)
      .then((res) => {
        if (res.data.status === 201) {
          alert("Cart Data is Posted Successfully");
        }
      })
      .catch((err) => {
        alert("An Error Occurred while posting data");
      });
  };

  return (
    <div className="my-cart-wrapper">
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="column-labels">
        {columnLabels.map((item) => (
          <label>{item}</label>
        ))}
      </div>
      <div className="cart-products">
        {cartProducts &&
          cartProducts.map((items) => {
            const { productId } = items;
            return (
              <ProductRow
                {...items}
                handleInputChange={handleInputChange}
                handleDelete={() => handleDelete(productId)}
                currency={currency}
              />
            );
          })}
      </div>
      <PriceSection
        labels={labels}
        currency={currency}
        subTotalPrice={subTotalPrice}
        vatPer={vatPer}
        vatAmount={vatAmount}
        totalAmount={totalAmount}
      />
      <Button
        ctaLabel={ctaLabel}
        handleButtonClick={handleButtonClick}
        disabled={Boolean(cartProducts && cartProducts.length === 0)}
      />
    </div>
  );
};

export default MyCart;

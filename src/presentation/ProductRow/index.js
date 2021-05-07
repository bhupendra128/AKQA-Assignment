import React from "react";
import Image from "../Image";
import PriceComponent from "../Price";
import Spinner from "../Spinner";

const ProductRow = (props) => {
  const {
    title,
    quantity,
    image,
    price,
    handleInputChange,
    handleDelete,
    currency,
    deleteIcon,
    productId,
    minQuantity,
    maxQuantity,
  } = props;
  const totalPrice = parseFloat(quantity * price).toFixed(2);

  return (
    <div className="product-row">
      <div className="product">
        <div className="product-image">
          <Image image={image} />
        </div>
        <div className="product-detail">
          <h4>{title}</h4>
          <PriceComponent
            price={price}
            currency={currency}
            className="product-price"
          />
          <Spinner
            productId={productId}
            minQuantity={minQuantity}
            maxQuantity={maxQuantity}
            quantity={quantity}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <PriceComponent
        price={totalPrice}
        currency={currency}
        className="total-price"
      />
      <div className="delete-btn" onClick={handleDelete}>
        <Image image={deleteIcon} />
      </div>
    </div>
  );
};

export default ProductRow;

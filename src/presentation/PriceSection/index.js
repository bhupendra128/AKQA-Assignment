import React from "react";
import PriceComponent from "../Price";
import "./PriceSection.scss";

const PriceSubSection = ({ label, price, currency, className }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <PriceComponent
        price={price}
        currency={currency}
        className="product-price"
      />
    </div>
  );
};

const PriceSection = (props) => {
  const {
    labels: { subTotal, totalCost, vat },
    currency,
    subTotalPrice,
    vatPer,
    vatAmount,
    totalAmount,
  } = props;

  return (
    <div className="price-section">
      <div className="sub-section">
        {PriceSubSection({
          label: subTotal,
          price: subTotalPrice,
          currency,
          className: "sub-total",
        })}
        {PriceSubSection({
          label: vat.replace("{0}", vatPer),
          price: vatAmount,
          currency,
          className: "vat",
        })}
      </div>
      {PriceSubSection({
        label: totalCost,
        price: totalAmount,
        currency,
        className: "total-cost",
      })}
    </div>
  );
};

export default PriceSection;

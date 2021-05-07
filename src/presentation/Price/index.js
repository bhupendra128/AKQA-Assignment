import React from "react";

const Price = (props) => {
  const { currency, price, className } = props;
  return (
    <div className={`price-wrapper ${className}`}>
      <span className="currency">{currency}</span>
      <span className="price">{price}</span>
    </div>
  );
};

export default Price;

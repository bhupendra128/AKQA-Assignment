import React from "react";
import "./Spinner.scss";

const Spinner = (props) => {
  const {
    maxQuantity,
    minQuantity,
    quantity,
    productId,
    handleInputChange,
  } = props;
  const increaseCount = () => {
    if (quantity + 1 <= maxQuantity) {
      handleInputChange({ quantity: quantity + 1, productId });
    }
  };
  const decreaseCount = () => {
    if (quantity - 1 >= minQuantity) {
      handleInputChange({ quantity: quantity - 1, productId });
    }
  };
  return (
    <div className="spinner">
      <input
        type="text"
        className="input-quantity"
        min={minQuantity}
        max={maxQuantity}
        value={quantity}
        name={productId}
        id={productId}
        readOnly={true}
      />
      <div className="spinner-button">
        <button
          className="increase-btn"
          disabled={quantity >= maxQuantity}
          onClick={increaseCount}
          tabIndex="0"
          aria-label="increase button"
        />
        <button
          className="decrease-btn"
          disabled={quantity <= minQuantity}
          onClick={decreaseCount}
          tabIndex="0"
          aria-label="decrease button"
        ></button>
      </div>
    </div>
  );
};

export default Spinner;

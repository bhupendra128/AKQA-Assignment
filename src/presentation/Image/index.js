import React from "react";

const Image = (props) => {
  const { url, alt } = props.image;
  return <img src={url} className={props.className} alt={alt} />;
};

export default Image;

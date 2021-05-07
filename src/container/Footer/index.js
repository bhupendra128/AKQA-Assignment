import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>{props.description}</div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "../../presentation/Image";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Image image={props.image} />
    </header>
  );
};

export default Header;

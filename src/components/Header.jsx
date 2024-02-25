import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img
          className="max-w-[150px] "
          src="/public/BrandAssets_Logos_01-Wordmark.jpg"
          alt=""
        />
      </Link>
    </header>
  );
};

export default Header;

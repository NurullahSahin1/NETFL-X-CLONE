import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img
          className="max-w-[150px] "
          src="/BrandAssets_Logos_01-Wordmark.jpg"
          alt=""
        />
      </Link>
    </header>
  );
};

export default Header;

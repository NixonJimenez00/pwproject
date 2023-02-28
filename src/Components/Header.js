import React from "react";
import "./Header.css";
//import SearchIcon from "@mui/icons-material/Search";
//import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="a - Logo 01.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/*<SearchIcon className="header__searchIcon" />*/}
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Login </span>
            <span className="header__optionLineTwo">Iniciar</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Historial</span>
            <span className="header__optionLineTwo">& Ordenes</span>
          </div>
        </Link>
        <Link to="/addproducts">
          <div className="header__option">
            <span className="header__optionLineOne">Admin</span>
            <span className="header__optionLineTwo">Enter</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            {/* <ShoppingBasketIcon />*/}
            <span className="header__optionLineTwo header__basketCount"></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

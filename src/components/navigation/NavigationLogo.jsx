import { NavLink } from "react-router-dom";
import { React } from "react";
import IconBlack from "../../assets/images/icon-black.png";
import ScrollToTop from "../../helpers/ScrollToTop";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="navigation__logo"
      onClick={() => {
        ScrollToTop();
        props.closeMenu();
      }}
    >
      <img src={IconBlack} alt="" aria-hidden="true"></img>
    </NavLink>
  );
};

export default NavigationLogo;

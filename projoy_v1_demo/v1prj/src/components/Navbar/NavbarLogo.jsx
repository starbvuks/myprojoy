import React from "react";
import {Logo, LogoImg} from "./stylesNavbarLogo";

import logo from "../../images/logo/mainlogo.png";

function NavbarLogo() {
  return (
    <div>
      <Logo>
        <LogoImg src={logo} alt="logo" />
      </Logo>
    </div>
  );
}

export default NavbarLogo;

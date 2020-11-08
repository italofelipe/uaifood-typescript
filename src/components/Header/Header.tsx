import React from "react";
import { Logo, StyledHeader, StyledLogoBox } from "./StyledHeader";
import logo from "../../assets/logo-red.jpg";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogoBox>
        <Logo src={logo} />
      </StyledLogoBox>
    </StyledHeader>
  );
};

export default Header;

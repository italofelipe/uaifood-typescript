import React from "react";
import { Logo, StyledHeader, StyledLogoBox } from "./StyledHeader";
import logo from "../../assets/logo-red.jpg";
import SearchForm from "../SearchForm/SearchForm";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogoBox>
        <Logo src={logo} />
      </StyledLogoBox>
      <SearchForm />
    </StyledHeader>
  );
};

export default Header;

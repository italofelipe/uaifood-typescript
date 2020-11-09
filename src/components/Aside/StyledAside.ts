import styled from "styled-components";

const StyledAside = styled.aside`
  display: flex;
  flex-flow: column;
  width: 25%;
  box-shadow: 3px 3px 3px 2px #ddd;
`;

const StyledAsideRatingsBox = styled.div`
  display: flex;
  flex-flow: row;
`;

const StyledAsideText = styled.h4`
  font-size: 18pt;
  color: "#a5a5a5";
  font-weight: lighter;
`;

const StyledAsideGlyph = styled.i`
  color: #484848;
  font-size: 18pt;
`;

const StyledAsideLabel = styled.label`
  color: "#484848";
  font-size: 18pt;
  font-weight: lighter;
`;

const StyledAsideCheckbox = styled.input`
  color: "#484848";
`;

export {
  StyledAside,
  StyledAsideCheckbox,
  StyledAsideGlyph,
  StyledAsideLabel,
  StyledAsideRatingsBox,
  StyledAsideText,
};

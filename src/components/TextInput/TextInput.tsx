/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { FunctionComponent } from "react";
import { StyledTextInput } from "./styles/StyledTextInput";
import { InputProps } from "../types/TextInputTypes";

const TextInput: FunctionComponent<InputProps> = ({
  placeholder,
  name,
  change,
}) => {
  return (
    <StyledTextInput
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={change}
    />
  );
};

export default TextInput;

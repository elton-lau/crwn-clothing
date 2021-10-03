import styled from "@emotion/styled";
import { css } from "@emotion/react";

const GoogleSignInStyles = () => css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none
`;

const invertedButtonStyles = () => css`
    background-color: white;
    color: black;
    border: 1px solid black

    &:hover {
        background-color: black;
        color: while;
        border: none;
    }
`;

const customButtonStyles = () => css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const getButtonStyles = (props) => {
  if (props.inverted) {
    return invertedButtonStyles;
  }
  return props.isGoogleSignIn ? GoogleSignInStyles : customButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`;

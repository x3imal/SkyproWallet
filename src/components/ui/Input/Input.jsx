import styled from "styled-components";

export const Input = styled.input`
  width: 313px;
  height: 39px;
  border-radius: 6px;
  border: 0.5px solid #999999;
  padding: 12px;
  box-sizing: border-box;
  background: #ffffff;
  outline: none;

  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: start;
    color: #999999;
  }

  &:focus {
    border-color: #7334EA;
    box-shadow: 0 0 0 1px rgba(115, 52, 234, 0.4);
  }
`;

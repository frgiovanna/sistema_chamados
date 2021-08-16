import { Button as FormButton, TextField } from "@material-ui/core";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  margin: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
`;
export const FieldsWrapper = styled.div`
  display: flex;
  margin: 30px 0 20px;
`;

export const Input = styled(TextField).attrs({
  variant: "outlined",
  size: "small",
})`
  .MuiOutlinedInput-root {
    margin: 3px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiButtonBase-root {
    margin: 10px;
  }
`;

export const Button = styled(FormButton).attrs({
  variant: "contained",
  color: "primary",
})``;

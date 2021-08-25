import styled from "styled-components";
import { Button as FormButton, TextField } from "@material-ui/core";

export const Container = styled.div`
  margin: 13%;
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
  width: 300px;
  .MuiOutlinedInput-root {
    margin: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiButtonBase-root {
    margin: 12px;
  }
`;

export const Button = styled(FormButton).attrs({
  variant: "contained",
  color: "primary",
})``;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .MuiButtonBase-root {
    margin: 10px;
  }
`;

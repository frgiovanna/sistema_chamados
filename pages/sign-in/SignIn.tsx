import React, { useState } from "react";
import Link from "next/link";

import * as Style from "../../styles/styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("CLICOU");
  }

  return (
    <Style.LoginWrapper>
      <form onSubmit={handleSubmit}>
        <Style.Title>Insira seu email e senha para entrar</Style.Title>
        <Style.FieldsWrapper>
          <Style.Input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Style.Input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Style.FieldsWrapper>
        <Style.ButtonWrapper>
          <Style.Button type="submit">Acessar</Style.Button>
          <Style.Button>
            <Link href="/register">Criar uma conta</Link>
          </Style.Button>
        </Style.ButtonWrapper>
      </form>
    </Style.LoginWrapper>
  );
};

export default SignIn;

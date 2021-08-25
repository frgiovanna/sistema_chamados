import { useState } from "react";
import Link from "next/link";

import * as Style from "../../styles/styles";

function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("CLICOU");
  }

  return (
    <Style.Container>
      <form onSubmit={handleSubmit}>
        <Style.Title>Cadastrar uma conta</Style.Title>
        <Style.RegisterWrapper>
          <Style.Input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
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
          <Style.Button type="submit">Cadastrar</Style.Button>
        </Style.RegisterWrapper>
        <h4 style={{ textAlign: "center" }}>
          <Link href="/">Já tem uma conta? Entre</Link>
        </h4>
      </form>
    </Style.Container>
  );
}

export default SignUp;

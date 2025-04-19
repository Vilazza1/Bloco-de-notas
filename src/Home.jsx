// Home.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { loginUser } from "./services/sistemaLogin";

function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate(); // hook para redirecionamento

  const handleLogin = () => {
    const resultado = loginUser(email, senha);
    setMensagem(resultado.message);

    if (resultado.success) {
      localStorage.setItem("usuarioLogado", email);
      navigate("/homePrincipal"); // redireciona para HomeBn se login for válido
    }
  };

  return (
    <div className="home">
      <div className="container_login">
        <div className="login">
          <h1>FAÇA SEU LOGIN</h1>
          <input
            type="email"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={handleLogin}>ENTRAR</button>
          {mensagem && <p>{mensagem}</p>}
          <p>
            Crie a sua conta: <Link to="/register">Registrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

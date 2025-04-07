import React, { useState } from "react";
import "./registro.css";
import { registrarUsuario } from "./services/sistemaRegistro";

function Registration() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(null); // para definir a cor

  const handleRegistro = () => {
    const resultado = registrarUsuario({ nome, email, senha, confirmarSenha });
    setMensagem(resultado.mensagem);
    setSucesso(resultado.sucesso);

    if (resultado.sucesso) {
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
    }
  };

  return (
    <div className="registro">
      <div className="box">
        <h1>CRIE A SUA CONTA</h1>

        <h3>Seu Nome</h3>
        <input
          type="text"
          placeholder="Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <h3>E-mail</h3>
        <input
          type="email"
          placeholder="Seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3>Senha</h3>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <h3>Confirmar Senha</h3>
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <button onClick={handleRegistro}>Criar Conta</button>

        {mensagem && (
          <p className={`mensagem ${sucesso ? "sucesso" : "erro"}`}>
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}

export default Registration;

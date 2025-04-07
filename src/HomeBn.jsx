import React, { useEffect, useState } from "react";

function HomeBn() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    const emailLogado = localStorage.getItem("usuarioLogado");

    if (emailLogado) {
      const dados = localStorage.getItem(emailLogado);
      if (dados) {
        const usuario = JSON.parse(dados);
        setNome(usuario.nome);
      }
    }
  }, []);

  return (
    <div className="homebn">
      <h1>Bem-vindo, {nome}!</h1>
      <p>Você está na sua página principal.</p>
    </div>
  );
}

export default HomeBn;

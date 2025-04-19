import React, { useState, useEffect } from "react";
import Header from "./Header";

function HomePrincipal() {
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
    <div>
      <Header />
      <div>
        <div>
          <h1>Bem-vindo, {nome}!</h1>
          <p>Você está no seu bloco de notas.</p>
        </div>
        <div>
          <h1>QUAL SUA NOVA NOTA?</h1>
          <h2>Nome da Nota</h2>
          <input type="text" placeholder="Escreva o nome da nota:" />
          <h2>Nova Nota</h2>
          <input type="text" placeholder="Escreva a sua nota:" />
          <h2>Categoria</h2>
          <input type="text" placeholder="Escreva a categoria da nota:" />
          <button>Salvar Nota</button>
        </div>
      </div>
    </div>
  );
}

export default HomePrincipal;

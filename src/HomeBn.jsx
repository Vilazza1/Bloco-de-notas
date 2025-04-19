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
    <>
      <header>
        <button>Home</button>
        <button>Meu Perfil</button>
        <button>Minhas Notas Favoridas</button>
        <button>Categorias</button>
      </header>
      <div className="homebn">
        <div>
          <h1>Bem-vindo, {nome}!</h1>
          <p>Você está na seu bloca de notas.</p>
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
    </>
  );
}

export default HomeBn;

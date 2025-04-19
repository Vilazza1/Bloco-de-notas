import React, { useEffect, useState } from "react";
import "./Header.css";

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
      <header className="header">
        <div className="btnHeader">
          <button>Home</button>
          <button>Meu Perfil</button>
          <button>Minhas Notas Favoridas</button>
          <button>Categorias</button>
        </div>
      </header>
    </>
  );
}

export default HomeBn;

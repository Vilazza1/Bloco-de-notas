import React, { useEffect, useState } from "react";
import "./Header.css";

function HomeBn() {
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

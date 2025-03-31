import { Link } from "react-router-dom";
import "./Home.css"


function Home() {
  return (
    <div className="home">
      <div className="container_login">
        <div className="login">
          <h1>FAÇA SEU LOGIN</h1>
          <input type="email" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button>ENTRAR</button>
          <p>Crie a sua conta: <Link to="/register">Registrar</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Home;

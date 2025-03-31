import "./registro.css"

function Registration() {
    return (
      <div className="registro">
        <div className="box"> 
            <h1>CRIE A SUA CONTA</h1>
            <h3>Sue Nome</h3>
            <input type="text" placeholder="Seu Nome" />
            <h3>E-mail</h3>
            <input type="email" placeholder="Seu E-mail" />
            <h3>Senha</h3>
            <input type="password" placeholder="Senha" />
            <h3>Confimar Senha</h3>
            <input type="passoword" placeholder="Confirmar Senha" />
            <button>Criar Conta</button>
        </div>
      </div>
    );
  }
  
  export default Registration;
  
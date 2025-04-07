export function registrarUsuario({ nome, email, senha, confirmarSenha }) {
    if (!nome || !email || !senha || !confirmarSenha) {
      return { sucesso: false, mensagem: "Preencha todos os campos!" };
    }
  
    if (senha !== confirmarSenha) {
      return { sucesso: false, mensagem: "As senhas não coincidem!" };
    }
  
    const jaExiste = localStorage.getItem(email);
    if (jaExiste) {
      return { sucesso: false, mensagem: "Este email já está cadastrado." };
    }
  
    const novoUsuario = { nome, email, senha };
    localStorage.setItem(email, JSON.stringify(novoUsuario));
  
    return { sucesso: true, mensagem: "Usuário registrado com sucesso!" };
  }
  
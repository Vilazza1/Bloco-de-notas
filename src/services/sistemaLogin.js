export function loginUser(email, password) {
    if (!email || !password) {
      return { success: false, message: "Preencha todos os campos!" };
    }
  
    const user = JSON.parse(localStorage.getItem(email));
    if (!user) {
      return { success: false, message: "Usuário não encontrado!" };
    }
  
    if (user.senha !== password) {
      return { success: false, message: "Senha incorreta!" };
    }
  
    return { success: true, message: `Bem-vindo, ${user.nome}!` };
  }
  
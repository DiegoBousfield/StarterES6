class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true; 
  }
}


class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha');
const Admin1 = new Admin('email@email', 'senha');

console.log(User1.isAdmin(), Admin1.isAdmin());
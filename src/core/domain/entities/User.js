/**
 * User Entity
 * Representa el modelo de usuario en el dominio
 */
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  isValid() {
    return (
      this.email && 
      typeof this.email === 'string' && 
      this.email.includes('@') &&
      this.name && 
      typeof this.name === 'string'
    );
  }
}

export default User;
import UserRepository from '../../core/domain/repositories/UserRepository';
import User from '../../core/domain/entities/User';

/**
 * InMemoryUserRepository
 * Implementación en memoria del repositorio de usuarios
 */
class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = [
      new User('1', 'John Doe', 'john@example.com'),
      new User('2', 'Jane Smith', 'jane@example.com')
    ];
  }

  async getById(id) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async getAll() {
    return [...this.users];
  }

  async save(user) {
    if (!user.isValid()) {
      throw new Error('Invalid user data');
    }

    const existingIndex = this.users.findIndex(u => u.id === user.id);
    
    if (existingIndex >= 0) {
      this.users[existingIndex] = user;
    } else {
      // Si es un nuevo usuario, generamos un ID
      const newUser = new User(
        String(this.users.length + 1),
        user.name,
        user.email
      );
      this.users.push(newUser);
      return newUser;
    }
    
    return user;
  }
}

export default InMemoryUserRepository;
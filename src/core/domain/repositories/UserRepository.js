/**
 * UserRepository Interface
 * Define los métodos que debe implementar cualquier repositorio de usuarios
 */
class UserRepository {
  /**
   * @param {string} id
   * @returns {Promise<User>}
   */
  async getById(id) {
    throw new Error('Method not implemented');
  }

  /**
   * @returns {Promise<User[]>}
   */
  async getAll() {
    throw new Error('Method not implemented');
  }

  /**
   * @param {User} user
   * @returns {Promise<User>}
   */
  async save(user) {
    throw new Error('Method not implemented');
  }
}

export default UserRepository;
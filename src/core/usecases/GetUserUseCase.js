/**
 * GetUserUseCase
 * Implementa la lógica de negocio para obtener un usuario
 */
class GetUserUseCase {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Obtiene un usuario por su ID
   * @param {string} userId
   * @returns {Promise<User>}
   */
  async execute(userId) {
    if (!userId) {
      throw new Error('User ID is required');
    }
    
    return this.userRepository.getById(userId);
  }
}

export default GetUserUseCase;
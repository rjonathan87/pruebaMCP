import GetUserUseCase from '../../core/usecases/GetUserUseCase';
import UserDTO from '../dtos/UserDTO';

/**
 * UserService
 * Coordina los casos de uso relacionados con usuarios y transforma las entidades en DTOs
 */
class UserService {
  /**
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.getUserUseCase = new GetUserUseCase(userRepository);
  }

  /**
   * Obtiene un usuario por ID y lo transforma en DTO
   * @param {string} userId
   * @returns {Promise<UserDTO>}
   */
  async getUserById(userId) {
    try {
      const user = await this.getUserUseCase.execute(userId);
      return new UserDTO(user.id, user.name, user.email);
    } catch (error) {
      console.error(`Error getting user ${userId}:`, error);
      throw error;
    }
  }
}

export default UserService;
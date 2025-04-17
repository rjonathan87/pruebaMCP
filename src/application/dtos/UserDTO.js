/**
 * UserDTO
 * Objeto de transferencia de datos para la entidad User
 */
class UserDTO {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static fromEntity(user) {
    return new UserDTO(user.id, user.name, user.email);
  }
  
  static toEntity(userDTO) {
    const User = require('../../core/domain/entities/User').default;
    return new User(userDTO.id, userDTO.name, userDTO.email);
  }
}

export default UserDTO;
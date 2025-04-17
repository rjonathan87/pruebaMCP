import React from 'react';

/**
 * UserCard
 * Componente para mostrar información de un usuario
 */
const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <div className="mt-3 text-xs text-gray-500">ID: {user.id}</div>
    </div>
  );
};

export default UserCard;
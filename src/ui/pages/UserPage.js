import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import UserCard from '../components/UserCard';
import InMemoryUserRepository from '../../infrastructure/repositories/InMemoryUserRepository';
import UserService from '../../application/services/UserService';

/**
 * UserPage
 * Página que muestra información de un usuario
 */
const UserPage = ({ userId = '1' }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRepository = new InMemoryUserRepository();
        const userService = new UserService(userRepository);
        const userData = await userService.getUserById(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <MainLayout title="User Details">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
        
        {loading && (
          <div className="text-center py-4">Loading...</div>
        )}
        
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
            Error: {error}
          </div>
        )}
        
        {user && <UserCard user={user} />}
      </div>
    </MainLayout>
  );
};

export default UserPage;
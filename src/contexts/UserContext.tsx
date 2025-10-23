import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  username?: string;
  website?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredUsers: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  getUserById: (id: number) => User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
    loadLocalUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const loadLocalUsers = () => {
    const localUsers = localStorage.getItem('localUsers');
    if (localUsers) {
      const parsed = JSON.parse(localUsers);
      setUsers(prev => [...prev, ...parsed]);
    }
  };

  const addUser = (newUser: Omit<User, 'id'>) => {
    const user: User = {
      ...newUser,
      id: Date.now(),    
    };
    
    setUsers(prev => [user, ...prev]);
    
    const localUsers = localStorage.getItem('localUsers');
    const existingLocal = localUsers ? JSON.parse(localUsers) : [];
    localStorage.setItem('localUsers', JSON.stringify([user, ...existingLocal]));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getUserById = (id: number) => users.find(user => user.id === id);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        filteredUsers,
        addUser,
        getUserById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};

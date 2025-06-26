import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const mockUsers = [
  {
    email: "admin@musify.com",
    password: "admin123",
    role: "admin",
  },
  {
    email: "user@musify.com",
    password: "user123",
    role: "user",
  },
];

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(() => localStorage.getItem("role"));
  const [error, setError] = useState(null);

  const login = (email, password) => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("role", user.role);
      setRole(user.role);
      setError(null);
    } else {
      setError("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

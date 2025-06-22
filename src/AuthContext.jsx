import React, { createContext, useContext, useState} from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(() => localStorage.getItem("role"));

    const login = (newRole) => {
        localStorage.setItem("role", newRole);
        setRole(newRole);
    };

    const logout = () => {
        localStorage.removeItem('role');
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{role, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
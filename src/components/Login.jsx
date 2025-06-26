import { useAuth } from '../AuthContext';
import { useState } from 'react';

export default function Login({ showLoginButtons }) {
  const { login, logout, error } = useAuth();
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!showLoginButtons) {
    return (
      <div className="flex flex-col items-center gap-4 mt-6">
        <button
          onClick={logout}
          className="w-48 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          Logout
        </button>
      </div>
    );
  }

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {!selectedRole ? (
        <>
          <h2 className="text-2xl font-bold text-center text-blue-800">Login to Musify 🎶</h2>
          <button
            onClick={() => handleRoleSelect('user')}
            className="w-48 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
          >
            Login as User
          </button>
          <button
            onClick={() => handleRoleSelect('admin')}
            className="w-48 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
          >
            Login as Admin
          </button>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-80"
        >
          <h2 className="text-xl font-bold text-center mb-4 text-blue-700">
            Login as {selectedRole === 'admin' ? 'Admin 🛠️' : 'User 🎧'}
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition mb-2"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole(null)}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 rounded transition"
          >
            ← Back to role selection
          </button>
        </form>
      )}
    </div>
  );
}

import { useAuth } from '../AuthContext';

export default function Login({ showLoginButtons }) {
  const { login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {showLoginButtons ? (
        <>
          <button
            onClick={() => login("user")}
            className="w-48 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
          >
            Login as User
          </button>
          <button
            onClick={() => login("admin")}
            className="w-48 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
          >
            Login as Admin
          </button>
        </>
      ) : (
        <button
          onClick={logout}
          className="w-48 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          Logout
        </button>
      )}
    </div>
  );
}

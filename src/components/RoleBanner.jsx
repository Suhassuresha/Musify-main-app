import { useAuth } from "../AuthContext";

export default function RoleBanner({ songCount }) {
  const { role } = useAuth();

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h2 className="text-lg font-bold text-blue-800">
        Welcome, {role === 'admin' ? 'Admin 🛠️' : 'User 🎧'}
      </h2>
      <p className="text-sm text-gray-600">{songCount} songs in your library</p>
    </div>
  );
}

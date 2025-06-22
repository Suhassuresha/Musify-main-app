import { AuthProvider, useAuth } from "./AuthContext";
import Login from "./components/Login";
import MusicLibraryWrapper from "./components/MusicLibraryWrapper";

function MainAppContent() {
  const { role } = useAuth();

  return (
    <div className="min-h-screen w-full flex justify-center bg-gradient-to-b from-sky-100 to-white px-4 py-10 overflow-y-auto">
      <div className="my-auto bg-white shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-xl transition-transform transform hover:scale-[1.02] duration-300 ease-in-out border border-blue-100">
        <h1 className="text-4xl font-black text-blue-800 text-center mb-6 sm:mb-8 tracking-tight">
          Musify 🎶
        </h1>

        {!role ? (
          <div className="space-y-6">
            <Login showLoginButtons={true} />
            <p className="text-gray-500 text-center text-sm">
              Please log in to access the music library.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <Login showLoginButtons={false} />
            <p className="text-center text-lg font-medium text-green-700">
              Welcome, <span className="capitalize">{role}</span>!
            </p>
            <MusicLibraryWrapper />
          </div>
          
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainAppContent />
    </AuthProvider>
  );
}

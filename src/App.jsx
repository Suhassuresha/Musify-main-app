import { AuthProvider, useAuth } from "./AuthContext";
import Login from "./components/Login";
import MusicLibraryWrapper from "./components/MusicLibraryWrapper";
import { motion } from "framer-motion";

function MainAppContent() {
  const { role } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-700 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-700 shadow-2xl rounded-3xl p-6 sm:p-10"
      >
        <h1 className="text-3xl font-extrabold text-center text-blue-800 dark:text-blue-200 mb-8">
          Musify 🎶
        </h1>

        {!role ? (
          <>
            <Login showLoginButtons={true} />
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4">
              Please log in to access the music library.
            </p>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <Login showLoginButtons={false} />
              <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                Welcome, <span className="capitalize">{role}</span>!
              </p>
            </div>
            <MusicLibraryWrapper />
          </>
        )}
      </motion.div>
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

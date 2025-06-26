export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-blue-800">Musify 🎶</h1>
      </header>
      <main className="max-w-5xl mx-auto mt-6 px-4">{children}</main>
    </div>
  );
}

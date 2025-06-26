export default function SongCard({ song, onDelete, isAdmin }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-800">{song.title}</h3>
      <p className="text-sm text-gray-600">{song.artist}</p>
      <p className="text-xs text-gray-500">{song.album}</p>

      {song.audioUrl && (
        <audio controls src={song.audioUrl} className="mt-2 rounded" />
      )}

      {isAdmin && (
        <button
          onClick={() => onDelete(song)}
          className="text-red-600 text-sm hover:underline mt-2 self-start"
        >
          🗑 Delete
        </button>
      )}
    </div>
  );
}

import { useState } from "react";
import { useAuth } from "../AuthContext";
import DashboardLayout from "../components/DashboardLayout";
import RoleBanner from "../components/RoleBanner";
import SongCard from "../components/SongCard";

const dummySongs = [
  { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
  { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
  { title: "Closer", artist: "The Chainsmokers", album: "Collage" },
];

export default function MusicDashboard() {
  const [songs, setSongs] = useState(dummySongs);
  const { role } = useAuth();

  const handleDelete = (songToDelete) => {
    setSongs((prev) => prev.filter((s) => s !== songToDelete));
  };

  return (
    <DashboardLayout>
      <RoleBanner songCount={songs.length} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {songs.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isAdmin={role === "admin"}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}

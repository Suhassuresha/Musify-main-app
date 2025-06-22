import React, { Suspense } from 'react';
import { useAuth } from '../AuthContext'; 
const MusicLibrary = React.lazy(() => import('music_library/MusicLibrary'));

export default function MusicLibraryWrapper() {
  const { role } = useAuth(); 
  return (
    <Suspense fallback={<div>Loading Music Library...</div>}>
        <div className="w-full max-w-2xl mx-auto px-4">
            <MusicLibrary role={role} />
        </div>
    </Suspense>
  );
}

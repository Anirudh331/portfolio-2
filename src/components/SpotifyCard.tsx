import albumArt from '@/assets/album-art.jpg';
import spotifyIcon from '@/assets/spotify.svg';
import { Play } from 'lucide-react';

const SpotifyCard = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <a
        href="https://open.spotify.com/track/0bLCiBR9AOtfp98dk7iCL5"
        target="_blank"
        rel="noopener noreferrer"
        className="spotify-card group"
      >
        <img
          src={albumArt}
          alt="Album art"
          className="w-14 h-14 rounded-md object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <img src={spotifyIcon} alt="Spotify" className="w-4 h-4" />
            <span className="text-xs text-muted-foreground">Last played</span>
          </div>
          <p className="font-medium text-sm truncate">Pani Da Rang - Male</p>
          <p className="text-xs text-muted-foreground truncate">
            by Ayushmann Khurrana, Rochak Kohli
          </p>
        </div>
        <button className="p-2 rounded-full hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
          <Play className="w-5 h-5" />
        </button>
      </a>
    </div>
  );
};

export default SpotifyCard;

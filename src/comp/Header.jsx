import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { IoPauseSharp } from 'react-icons/io5';
import { IoMdPlay } from 'react-icons/io';

function Header() {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlayback = async () => {
		const audio = audioRef.current;
		if (!audio) return;

		try {
			if (audio.paused) {
				await audio.play();
				setIsPlaying(true);
			} else {
				audio.pause();
				setIsPlaying(false);
			}
		} catch {
			setIsPlaying(false);
		}
	};

	return (
		<header className="site-header">
			<Link to="/">Home</Link>
			<Link to="/logMenu">Logs</Link>
			<Link to="/about">About</Link>
			<Link to="/farewell">Farewell</Link>
			<audio ref={audioRef} src="/thoughts_in_my_mind.mp3" preload="auto" loop onEnded={() => setIsPlaying(false)} />
			<button
				type="button"
				className="header-audio-button"
				onClick={togglePlayback}
				aria-label={isPlaying ? 'Pause thoughts in my mind' : 'Play thoughts in my mind'}
				title={isPlaying ? 'Pause thoughts in my mind' : 'Play thoughts in my mind'}
			>
				{isPlaying ? <IoPauseSharp /> : <IoMdPlay />}
			</button>
			<a
				href="https://open.spotify.com/track/38dj9coHqmf0Wg1HP4K5IK"
				target="_blank"
				rel="noreferrer"
			>
				Thoughts in My Mind · Donnie &amp; Joe Emerson
			</a>
		</header>
	);
}

export default Header;

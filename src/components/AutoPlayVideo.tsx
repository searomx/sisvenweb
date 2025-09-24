import React from 'react';

function AutoplayVideo() {
	return (
		<video
			autoPlay // Starts playing the video automatically
			muted // Required by most browsers to allow autoplay
			playsInline // Useful for iOS Safari to prevent fullscreen playback
			loop // Optionally loop the video
			controls // Optionally show default video controls
		>
			<source src="./videos/video-equipe1.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}

export default AutoplayVideo;

import React from 'react';
import VideoSwitcher from './VideoSwitcher';

const AutoplayVideo: React.FC = () => {
	const videos = ['./videos/video-equipe1.mp4', './videos/video-equipe2.mp4', './videos/video-equipe3.mp4'];
	return <VideoSwitcher videoUrls={videos} />;
};
export default AutoplayVideo;
import React from 'react';

const VideoDetail = ({video}) => {
	// This prevents the access of video in index.js
	// before it is ready.
	if(!video) {
		// Only something you want to do something rarely
		return <div>Loading...</div>;
	}	

	const videoId = video.id.videoId;
	// ES6 version. original was 'string' + videoId;
	const url = `https://www.youtube.com/embed/${videoId}`; 

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
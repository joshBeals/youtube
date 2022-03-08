import './VideoMain.css';
import React from 'react';

const VideoItem = ({ video }) => {

    const onVideoClick = () => {
        
    }

    const { snippet } = video;

    return(
        <div onClick={onVideoClick} className='video-item col-lg-3 col-md-6'>
            <div className='video'>
                <img src={snippet.thumbnails.medium.url} />
                <div className='text-white'>
                    <p style={{ padding: '0px', margin: '0px' }}>{snippet.title}</p>
                    <p><span style={{ padding: '0px', margin: '0px' }}>{snippet.channelTitle} <br /> {snippet.publishedAt}</span></p>
                </div>
            </div>
        </div>
    );

}

export default VideoItem;
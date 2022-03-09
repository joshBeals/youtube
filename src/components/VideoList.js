import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions';
import Spinner from './Spinner/Spinner';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    useEffect(() => {
        props.searchVideos(props.selectedVideo.snippet.channelTitle)
    }, []);

    if(props.searchResult == ''){
        return(
            <div>
                <Spinner />
            </div>
        );
    }
    
    const videoList = props.searchResult.map(video => {
        return(
            <VideoItem key={video.etag} video={video} view='watch' />
        );
    });

    return(
        <div>
            {videoList}
        </div>
    );
};

const mapStateToProps = state => {
    return { searchResult: state.searchResult, selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, { searchVideos })(VideoList);
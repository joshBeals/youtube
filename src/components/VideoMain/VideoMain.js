import './VideoMain.css';
import React from 'react';
import { useEffect } from 'react';
import Filter from '../Filters';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { fetchAllVideos } from '../../actions';

const VideoMain = (props) => {
    
    useEffect(() => {
        props.fetchAllVideos();
    },[]);

    console.log(props.allVideos);

    if(props.allVideos == ''){
        return(
            <div className='video-main-container'>
                <Spinner />
            </div>
        );
    }

    const videosList = props.allVideos.map(video => {
        return(
            <VideoItem key={video.etag} video={video} newVideo={newVideo} />
        );
    });

    return(
        <div>
            {videosList}
        </div>
    );
};

const mapStateToProps = state => {
    return { allVideos: state.allVideos };
}

export default connect(mapStateToProps, { fetchAllVideos })(VideoMain);
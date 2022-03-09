import React from 'react';
import { connect } from 'react-redux';

const Video = ({ selectedVideo }) => {

    if(Object.keys(selectedVideo).length == 0){
        return(
            <div>No selectedVideo</div>
        );
    }

    return(
        <div className="d-flex flex-column">
            <iframe style={{ width: '100%', height: '60vh' }} src={`https://youtube.com/embed/${selectedVideo.id.videoId}`} />
            <div className='mt-5'>
                <h5>{selectedVideo.snippet.title}</h5>
                <h6>{selectedVideo.snippet.description}</h6>
                <p><span style={{ color: 'gray' }}>{selectedVideo.snippet.channelTitle} <br /> {selectedVideo.snippet.publishedAt}</span></p>
            </div>
        </div>
    );
    
};

const mapStateToProps = state => {
    return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, {})(Video);
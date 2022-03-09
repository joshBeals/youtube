import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';
import { useHistory } from 'react-router-dom';

const VideoItem = (props) => {
    
    const { snippet } = props.video;
    const history = useHistory();

    const onVideoClick = () => {
        props.selectVideo(props.video);
        history.push('/watch');
    }

    if(props.view == 'main'){
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

    if(props.view == 'search'){
        return(
            <div onClick={onVideoClick} className='video-item'>
                <hr />
                <div className='d-flex mb-2' data-bs-toggle="tooltip" data-bs-placement="top" title={snippet.description}>
                    <img src={snippet.thumbnails.medium.url} />
                    <div style={{marginLeft: '10px'}}>
                        <h5>{snippet.title}</h5>
                        <span>{snippet.channelTitle} <br /> {snippet.publishedAt}</span>
                        <p>{snippet.description}</p>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div onClick={onVideoClick} style={{ cursor: 'pointer' }}>
            <hr />
            <div className='d-flex mb-2' data-bs-toggle="tooltip" data-bs-placement="top" title={snippet.description}>
                <img src={snippet.thumbnails.default.url} />
                <div style={{marginLeft: '10px'}}>
                    <p>{snippet.title}</p>
                    <span style={{ color: 'gray' }}>{snippet.channelTitle} <br /> {snippet.publishedAt}</span>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, { selectVideo })(VideoItem);
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Video from '../components/Video';
import VideoList from '../components/VideoList';

const Watch = (props) => {

    const history = useHistory();

    if(Object.keys(props.selectedVideo).length == 0){
        history.push('/');
        return(
            <div></div>
        );
    }

    return(
        <div className='container-fluid row pt-5 text-white' style={{ backgroundColor: '#181818' }}>
            <div className='col-lg-8'>
                <Video />
            </div>
            <div className='col-lg-4'>
                <VideoList /> 
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps, {})(Watch);
import './SearchList.css';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import VideoItem from '../VideoItem';
import Spinner from '../Spinner/Spinner';
import { searchVideos } from '../../actions';

const SearchList = (props) => {

    useEffect(() => {
        props.searchVideos(props.searchTerm);
    },[props.searchTerm]);

    if(props.searchResult == ''){
        return(
            <div className='result-main-container'>
                <Spinner />
            </div>
        );
    }
    
    const videoList = props.searchResult.map(video => {
        return(
            <VideoItem key={video.etag} video={video} view="search" />
        );
    });

    return(
        <div className='row g-0' style={{ backgroundColor: '#181818' }}>
            <div className='container-fluid result-list-container col-lg-8 c0l-md-6'>
                {videoList}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { searchResult: state.searchResult, searchTerm: state.searchTerm };
}

export default connect(mapStateToProps, { searchVideos })(SearchList);
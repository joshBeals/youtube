import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import VideoMain from '../components/VideoMain/VideoMain';

const Main = () => {

    return(
        <div className='row g-0'>
            <div className='sidebar col-2'>
                <Sidebar />
            </div>
            <div className='vdeomain col-10'>
                <VideoMain />
            </div>
        </div>
    );
};

export default Main;
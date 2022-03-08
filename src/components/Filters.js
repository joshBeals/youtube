import './VideoMain/VideoMain.css';
import React from 'react';

const Filter = () => {
    return(
        <div className='filter'>
            <div className='my-badge active'>All</div>
            <div className='my-badge'>Music</div>
            <div className='my-badge'>NBA</div>
            <div className='my-badge'>React Development</div>
            <div className='my-badge'>Basketmouth</div>
            <div className='my-badge'>Family</div>
            <div className='my-badge'>Vikings</div>
            <div className='my-badge'>Romance</div>
        </div>
    );
};

export default Filter;
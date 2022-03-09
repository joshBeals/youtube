import './Spinner.css';
import React from 'react';

const Spinner = () => {
    return(
        <div className='spinner'>
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className='mt-3 text-white'>Loading...</h5>
        </div>
    );
}

export default Spinner;
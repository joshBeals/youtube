import React from 'react';
import SearchList from '../components/SearchMain/SearchList';
import Sidebar from '../components/Sidebar/Sidebar';

const SearchResult = () => {
    return(
        <div className='row g-0'>
            <div className='sidebar col-2'>
                <Sidebar />
            </div>
            <div className='search-list col-10'>
                <SearchList />
            </div>
        </div>
    );
};

export default SearchResult;
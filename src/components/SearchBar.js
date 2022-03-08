import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {

    const [term, setTerm] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push('/search');
    }

    return(
        <form onSubmit={handleSearch} className="d-flex col-lg-4">
            <input className="form-control me-1 bg-black text-white col-12" value={term} onChange={e => setTerm(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit"><i className='bi bi-search'></i></button>
        </form>
    );
}

export default SearchBar;
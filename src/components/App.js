import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import SearchResult from '../Pages/SearchResult';
import Watch from '../Pages/Watch';
import Header from './Header/Header';

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Main} />
                        <Route path="/watch" exact component={Watch} />
                        <Route path="/search" exact component={SearchResult} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;
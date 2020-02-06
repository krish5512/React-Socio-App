import React from 'react';
import LoginPage from './scripts/LoginPage.js';
import Header from './scripts/Header';

class MySocio extends React.Component {
    constructor(props){
        super(props);
    }

    render()
    {
        return(
                <div>
                <Header />
                <LoginPage />
                </div>
        )
    }
}


export default MySocio;
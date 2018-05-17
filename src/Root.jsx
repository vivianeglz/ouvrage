import React from 'react';
import CreateProfil from './components/createProfil';

export default class Root extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <h1>Ouvrage</h1>
                <CreateProfil />
            </div>
        );
    }
}

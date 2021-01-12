import React, { Component } from 'react';
import TablesList from './TablesList';
import UpdateTables from './UpdateTables';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Casino tables</h1>
                <UpdateTables />
                <TablesList />
            </div>
        );
    };
};

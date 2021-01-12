import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loadTables} from '../AC'

class UpdateTables extends Component {
    render() {
        return (
            <div>
                <button onClick = {this.update}>Update Tables</button>
            </div>
        );
    };

    update = () => {
        const {loadTables} = this.props;
        loadTables();
    }
};

export default connect(null, { loadTables })(UpdateTables);
import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {mapToArr} from '../helpers';
import Table from './Table';
import {loadTables} from '../AC'

class TablesList extends Component {
    static propTypes = {
        tables: PropTypes.array.isRequired,
    };

    componentDidMount() {
        const {loaded, loading, loadTables} = this.props;
        if (!loaded || !loading) loadTables();
        setInterval(loadTables, 5000);
    };

    render() {
        const { tables, loading } = this.props;

        const tablesElements = tables.map(table =>
            <Table table = {table} key = {table.id}/>
        );

        return (
            <table>
                <tbody>
                    {tablesElements}
                </tbody>
            </table>
        );
    };
};

export default connect((state) => {
    return {
        tables: mapToArr(state.tables.entities),
        loading: state.tables.loading,
        loaded: state.tables.loaded
    }
}, {loadTables})(TablesList);

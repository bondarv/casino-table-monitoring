import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import '../../style/index.css';

export default class Table extends PureComponent {
    static propTypes = {
        table: PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            warnings: PropTypes.bool.isRequired,
            players: PropTypes.number.isRequired,
            maxPlayers: PropTypes.number.isRequired
        }).isRequired
    };

    render() {
        const {table} = this.props;
        let showBlinking = null;

        if (table.warnings === true) {
            showBlinking = `blinking-shadow`;
        }

        return (
            <tr id = {showBlinking}>
                <td>{table.id}</td>
                <td id = {table.type}></td>
                <td>{table.name}</td>
                <td>{table.players}</td>
                <td>{table.maxPlayers}</td>
            </tr>
        );
    };
};

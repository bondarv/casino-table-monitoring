import {LOAD_TABLES, START, SUCCESS} from '../constants';
import {OrderedMap, Record} from 'immutable';
import {arrToMap} from '../helpers';

const TableRecord = Record({
    id: '',
    type: '',
    name: '',
    warnings: false,
    players: 0,
    maxPlayers: 0
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (tableState = defaultState, action) => {
    const {type, payload, response} = action;

    switch (type) {
        case LOAD_TABLES + START:
            return tableState
                .set('loaded', false)
                .set('loading', true);

        case LOAD_TABLES + SUCCESS:
            return tableState.update('entities', entities => entities.merge(arrToMap(response, TableRecord)))
                .set(`loading`, false)
                .set('loaded', true);

    };
    return tableState;
};

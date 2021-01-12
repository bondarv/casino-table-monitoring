import {LOAD_TABLES} from '../constants';

export function loadTables() {
    return {
        type: LOAD_TABLES,
        callAPI: '/api/tables' // address to upload tables
    };
};

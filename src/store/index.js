import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import api from '../middlewares/api';

const enhancer = applyMiddleware(api);

const store = createStore(reducer, {}, enhancer);

export default store;

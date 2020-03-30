import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {Reducers,InitialStates} from './reducers.js';

export default createStore(Reducers, InitialStates, applyMiddleware(thunk));

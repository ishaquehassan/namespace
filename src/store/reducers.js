import { combineReducers } from 'redux';
import {INITIAL_MAP_STATE, mapViewReducer} from "./modules/Map/reducers";
import {addTaskReducer, INIT_ADD_STATE} from "./modules/AddTask/reducers";

export const InitialStates = {
    mapView: INITIAL_MAP_STATE,
    addTask: INIT_ADD_STATE
};

export const Reducers = combineReducers({
    mapView: mapViewReducer,
    addTask: addTaskReducer
});

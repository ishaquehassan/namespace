import { TASKS_FETCHED, TASKS_FETCHING_FAILED } from "./actions";

export const INITIAL_MAP_STATE = {
    tasks: []
};

export const mapViewReducer = (state = INITIAL_MAP_STATE, action) => {
    switch (action.type) {
        case TASKS_FETCHED:
            return {...state,tasks: action.payload,error: null
            };
        case TASKS_FETCHING_FAILED:
            return {...state,error: action.payload};
        default:
            return state;
    }
};

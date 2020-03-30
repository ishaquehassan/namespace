import {  TASK_ADD_DONE, TASK_ADD_FAILED } from "./actions";

export const INIT_ADD_STATE = {
    done: false,
    error:null
};

export const addTaskReducer = (state = INIT_ADD_STATE, action) => {
    switch (action.type) {
        case TASK_ADD_FAILED:
            return {...state,processing: false,error: action.payload,done:false};
        case TASK_ADD_DONE:
            return {...state,processing: false,error: null,done:true};
        default:
            return state;
    }
};

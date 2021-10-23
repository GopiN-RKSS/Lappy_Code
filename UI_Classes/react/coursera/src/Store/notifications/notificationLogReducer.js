import { NOTIFICATION_LOG,NOTIFICATION_LOG_ERROR } from "../types";

let initialState = {
    notificationLog: [], 
    error: false,
}

export default function notificationLogReducer(state = initialState, action) {
    switch (action.type) {        
        case NOTIFICATION_LOG:
            return {
                ...state,
                notificationLog: action.response
            }        
        case NOTIFICATION_LOG_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}
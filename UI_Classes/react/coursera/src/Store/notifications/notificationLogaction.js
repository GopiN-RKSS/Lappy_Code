import {  NOTIFICATION_LOG,NOTIFICATION_LOG_ERROR } from "../types";
import HttpService from '../../Services/HttpService';

export const notificationlog = (response) => {
    return {
        type: NOTIFICATION_LOG,
        response
    }
}

export const notificationlogError = () => {
    return {
        type: NOTIFICATION_LOG_ERROR
    }
}

export const NotificationLogList = (user_id) => {
    return (dispatch) => {
        console.log('note',user_id);
        HttpService.notificationLog(user_id)
            .then(response => {
                console.log('response',response);
                dispatch(notificationlog(response.data))
            })
            .catch(error => {
                dispatch(notificationlogError());
            })
    }
}
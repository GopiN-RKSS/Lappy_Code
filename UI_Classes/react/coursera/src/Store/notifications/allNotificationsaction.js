import { ALL_NOTIFICATIONS, SENT_NOTIFICATIONS, SCHEDULED_NOTIFICATIONS} from '../types';
import HttpService from '../../Services/HttpService';

export const notificationsData = (response) =>{
    return {
        type: ALL_NOTIFICATIONS,
        response: response
    }
}

export const sentnotificationsData = (response) => {
    return {
        type: SENT_NOTIFICATIONS,
        response
    }
}

export const schedulednotificationsData = (response) => {
    return {
        type: SCHEDULED_NOTIFICATIONS,
        response
    }
}

export const getAllNotifications = () => {
    //console.log('All')
    return (dispatch) => {
        HttpService.allnotifications()
        .then(response => {
            //console.log('response',response.data)
            dispatch(notificationsData(response.data));
        })
    }
}

export const getSentNotifications = () => {
    //console.log('sent')
    return (dispatch) => {
        HttpService.sentnotifications()
            .then(response => {
                //console.log('response', response.data)
                dispatch(sentnotificationsData(response.data));
            })
    }
}

export const getScheduledNotifications = () => {
    //console.log('Scheduled')

    return (dispatch) => {
        HttpService.schedulednotifications()
            .then(response => {
                //console.log('response', response.data)
                dispatch(schedulednotificationsData(response.data));
            })
    }
}
    


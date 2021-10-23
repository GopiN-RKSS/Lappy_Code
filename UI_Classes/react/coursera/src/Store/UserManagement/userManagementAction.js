import { ACTIVE_USERS, AGENCY_USERS, BIGS_USERS, INACTIVE_USERS, USER_ERROR } from "../types";
import HttpService from '../../Services/HttpService';

export const publishActiveUser= (response) => {
    return {
        type: ACTIVE_USERS,
        response
    }
}
export const publishAgencyUser = (response) => {
    return {
        type: AGENCY_USERS,
        response
    }
}
export const publishBigsUser = (response) => {
    return {
        type: BIGS_USERS,
        response
    }
}

export const publishInactiveUser = (response) => {
    return {
        type: INACTIVE_USERS,
        response
    }
}

export const publishError = () => {
    return {
        type: USER_ERROR
    }
}

export const getActiveUsers = () => {
    return (dispatch) => {
        HttpService.activeusers()
            .then(response => {
                dispatch(publishActiveUser(response.data.active_users));
            })
            .catch(error => {
                dispatch(publishError());
            })
    }
}

export const getAgencyUsers = () => {
    return (dispatch) => {
        HttpService.agencyusers()
            .then(response => {
                dispatch(publishAgencyUser(response.data.agency_users))
            })
            .catch(error => {
                dispatch(publishError());
            })
    }
} 

export const getBigsUsers = () => {
    return (dispatch) => {
        HttpService.bigsusers()
            .then((response) => {
                dispatch(publishBigsUser(response.data.bigs_users))
            })
            .catch(error => {
                dispatch(publishError());
            })
    }
}

export const getInActiveUsers = () => {
    return (dispatch) => {
        HttpService.inactiveusers()
            .then(response => {
                dispatch(publishInactiveUser(response.data.inactive_users))
            })
            .catch(error => {
                dispatch(publishError());
            })
    }
}


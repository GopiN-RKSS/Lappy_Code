import {DSCOUNTS_LIST} from '../types';
import HttpService from '../../Services/HttpService';

export const discountsData = (response) =>{
    return {
        type: DSCOUNTS_LIST,
        response: response
    }
}

export const getDiscounts = () => {
    return (dispatch) => {
        HttpService.discountslist()
        .then(response => {
            console.log("discount list:- ",response.data)
            dispatch(discountsData(response.data));
        })
    }
}
    


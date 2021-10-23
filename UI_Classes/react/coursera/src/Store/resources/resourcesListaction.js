import { RESOURCES_LIST } from '../types';
import HttpService from '../../Services/HttpService';

 export const resourcesData = (response) =>{
    return {
        type: RESOURCES_LIST,
        response: response
    }
}


 export const getResourcesListdata = () => {
    return (dispatch) => {
        HttpService.getresources()
        .then(response => {
            console.log("resources data :- ",response)
            dispatch(resourcesData(response.data));
        })
    }
}

    


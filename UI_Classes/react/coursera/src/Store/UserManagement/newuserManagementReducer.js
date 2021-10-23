import { USER_FETCH_INPUT, GET_PERMISSIONS, USER_ADD, USER_ERROR,CASE_MANAGER  } from "../types";

let initialState = {
    formDetails: {},
    permissions: [],
    addUserResp:{},
    caseManager:{},
    error: false
}

export default function newUserManagementReducer(state = initialState, action) {
    switch (action.type) {
        case USER_FETCH_INPUT:
            return {
                ...state,
                formDetails: {
                    ...state.formDetails,
                    [action.Input.key]: action.Input.value
                }
            }
        case GET_PERMISSIONS:
            return {
                ...state,
                permissions: action.response
            }
        case USER_ADD:
            return {
                ...state,
                addUserResp: action.response
            }
            case CASE_MANAGER:
                return{
                    ...state,
                    caseManager:action.response
                }
        case USER_ERROR:
            return {
                ...state,
                error: true
            }

        default:
            return state
    }
}
import {
    MY_COMPANY_LIST_REQUEST,
    MY_COMPANY_LIST_SUCCESS,
    MY_COMPANY_LIST_FAILURE,
    MY_COMPANY_LIST_CLEAR,
    JOINED_COMPANY_LIST_REQUEST,
    JOINED_COMPANY_LIST_SUCCESS,
    JOINED_COMPANY_LIST_FAILURE,
    JOINED_COMPANY_LIST_CLEAR,
} from "../actions/types";


const myCompaniesListRequest = () => ({ type: MY_COMPANY_LIST_REQUEST })

const myCompaniesListSuccess = data => ({ type: MY_COMPANY_LIST_SUCCESS, companies: data })

const myCompaniesListFailure = error => ({ type: MY_COMPANY_LIST_FAILURE, error })

const myCompaniesListClear = () => ({ type: MY_COMPANY_LIST_CLEAR })

const joinedCompaniesListRequest = () => ({ type: JOINED_COMPANY_LIST_REQUEST })

const joinedCompaniesListSuccess = data => ({ type: JOINED_COMPANY_LIST_SUCCESS, companies: data })

const joinedCompaniesListFailure = error => ({ type: JOINED_COMPANY_LIST_FAILURE, error })

const joinedCompaniesListClear = () => ({ type: JOINED_COMPANY_LIST_CLEAR })


export {
    myCompaniesListRequest,
    myCompaniesListSuccess,
    myCompaniesListFailure,
    myCompaniesListClear,
    joinedCompaniesListRequest,
    joinedCompaniesListSuccess,
    joinedCompaniesListFailure,
    joinedCompaniesListClear,
}

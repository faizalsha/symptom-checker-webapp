import {
    myCompaniesListRequest,
    myCompaniesListSuccess,
    myCompaniesListFailure,
    myCompaniesListClear,
    joinedCompaniesListRequest,
    joinedCompaniesListSuccess,
    joinedCompaniesListFailure,
    joinedCompaniesListClear,
} from "../actionCreators/companiesList"
import { fetchJoinedCompanies, fetchMyCompanies } from "../../services/companiesService"
import { setError } from "./errorActions"

const getMyCompanies = () => dispatch => {
    dispatch(myCompaniesListRequest())
    fetchMyCompanies()
        .then(res => {
            dispatch(myCompaniesListSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(myCompaniesListFailure(error))
        })
}

const clearMyCompanies = () => dispatch => {
    dispatch(myCompaniesListClear())
}

const getJoinedCompanies = () => dispatch => {
    dispatch(joinedCompaniesListRequest())
    fetchJoinedCompanies()
        .then(res => {
            dispatch(joinedCompaniesListSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(joinedCompaniesListFailure(error))
        })
}

export { getMyCompanies, clearMyCompanies, getJoinedCompanies }

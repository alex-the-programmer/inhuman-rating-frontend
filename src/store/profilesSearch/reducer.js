import * as actionTypes from './actions';
import copyObject from "../../utilities/copyObject";
import axios from '../../utilities/axios';

const initialState = {
  profiles: [],
  loading: false,
  error: null
};

const searchProfilesStart = state=> {
    return dispatch => {
        axios.get('/profiles')
        .then(response=> {
            dispatch(actionTypes.SEARCH_PROFILES_SUCCESS, response.data);
        }).catch(error => {
            dispatch(actionTypes.SEARCH_PROFILES_FAIL, error);
        });

        return copyObject(state, {loading: true});
    };
};

const searchProfilesSuccess = (state, action)=>{
    return copyObject(state, {profiles: action.profiles, error: null, loading: false});
};

const searchProfilesFail = (state, action)=>{
    return copyObject(state, {error: action.error, loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_PROFILES_START: searchProfilesStart(state, action);
        case actionTypes.SEARCH_PROFILES_SUCCESS: searchProfilesSuccess(state, action);
        case actionTypes.SEARCH_PROFILES_FAIL: searchProfilesFail(state, action);
        default: state;
    }
};

export default reducer;
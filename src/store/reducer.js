import {combineReducers} from 'redux';
import profileSearchReducer from './profilesSearch/reducer';

const reducer = combineReducers({
    profileSearch: profileSearchReducer
});

export default reducer;
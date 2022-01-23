import { combineReducers } from 'redux';

// reducer import
import utilsReducer from './utilsReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    utils: utilsReducer
});

export default reducer;
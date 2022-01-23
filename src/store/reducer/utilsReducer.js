// project imports

// action - state management
import * as actionTypes from '../actions';

export const initialState = {
    widthP: '0%',
    fixHeader: false,
    scrollPos: 0
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        
        case actionTypes.PROGRESS:
            return {
                ...state,
                progressPercent: action.progressPercent,
                fixHeader: action.fixHeader,
                scrollPos: action.scrollPos
            };
        default:
            return state;
    }
};

export default customizationReducer;
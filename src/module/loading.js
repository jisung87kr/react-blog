import {createAction, handleActions} from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';
const INITIAL_STATE = 'loading/INITIAL_STATE';

export const startLoading = createAction(START_LOADING, type => type);
export const finishLoading = createAction(FINISH_LOADING, type => type);
export const initLoading = createAction(INITIAL_STATE);

const initialState = {}

const loading = handleActions({
    [START_LOADING]: (state, action) => ({
        ...state,
        [action.payload] : true,
    }),
    [FINISH_LOADING]: (state, action) => ({
        ...state,
        [action.payload] : false,
    }),
    [INITIAL_STATE]: (state, action) => initialState,
}, initialState);

export default loading;
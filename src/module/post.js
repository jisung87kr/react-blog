import {createAction, handleActions} from 'redux-actions';
import * as api from "../lib/api";
import createThunkRequest from "../lib/createThunkRequest";

const GET_POSTS = 'post/GET_POSTS';
const GET_POST = 'post/GET_POST';
const CREATE = 'post/CREATE';
const UPDATE = 'post/UPDATE';
const REMOVE = 'post/REMOVE';
const CHANGE_FEILD = 'post/CHANGE_FEILD';
const SET_INITIAL = 'post/SET_INITIAL';

export const getList = createThunkRequest(GET_POSTS, api.getPosts);
export const getPost = createThunkRequest(GET_POST, api.getPost);
export const createPost = createThunkRequest(CREATE, api.createPost);
export const changeFeild = createAction(CHANGE_FEILD, ({key, value}) => ({key, value}));
export const setInitial = createAction(SET_INITIAL);

const initialState = {
    posts: null,
    post: null,
    response: null,
}

const post = handleActions(
    {
        [GET_POSTS]: (state, action) => ({
            ...state,
            posts: action.payload,
        }),
        [GET_POST]: (state, action) => ({
            ...state,
            post: action.payload,
        }),
        [CHANGE_FEILD]: (state, action) => ({
           ...state,
            [action.payload.key]: action.payload.value
        }),
        [CREATE]: (state, action) => ({
            ...state,
            response: action.payload
        }),
        [SET_INITIAL]: (state, action) => initialState,
    },
    initialState
);

export default post;
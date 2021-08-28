import {createAction, handleActions} from 'redux-actions';
import * as api from "../lib/api";
import createThunkRequest from "../lib/createThunkRequest";

const GET_POSTS = 'post/GET_POSTS';
const GET_POST = 'post/GET_POST';
const CREATE = 'post/CREATE';
const EDIT_POST = 'post/EDIT_POST';
const UPDATE_POST = 'post/UPDATE_POST';
const DELETE_POST = 'post/DELETE';
const CHANGE_FEILD = 'post/CHANGE_FEILD';
const SET_INITIAL = 'post/SET_INITIAL';

export const getList = createThunkRequest(GET_POSTS, api.getPosts);
export const getPost = createThunkRequest(GET_POST, api.getPost);
export const createPost = createThunkRequest(CREATE, api.createPost);
export const updatePost = createThunkRequest(UPDATE_POST, api.updatePost);
export const deletePost = createThunkRequest(DELETE_POST, api.deletePost);
export const changeFeild = createAction(CHANGE_FEILD, ({key, value}) => ({key, value}));
export const setInitial = createAction(SET_INITIAL);
export const editPost = createAction(EDIT_POST, post => post);

const initialState = {
    posts: null,
    post: {},
    response: null,
    editId: null,
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
            post: {
               ...state.post,
               [action.payload.key]: action.payload.value
            }
        }),
        [CREATE]: (state, action) => ({
            ...state,
            response: action.payload
        }),
        [UPDATE_POST]: (state, action) => ({
            ...state,
            response: action.payload
        }),
        [EDIT_POST]: (state, action) => ({
            ...state,
            post: {
                title: action.payload.title,
                content: action.payload.content,
            }
        }),
        [DELETE_POST]: (state, action) => ({
            ...state,
            response: action.payload
        }),
        [SET_INITIAL]: (state, action) => initialState,
    },
    initialState
);

export default post;
import Show from '../component/Show';
import {getList, getPost, goToHome} from '../module/post';
import { connect, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
    useRouteMatch,
    useParams,
    Redirect,
} from "react-router-dom";

function ShowContainer({post, loading, getPost, history})
{
    const dispatch = useDispatch();
    let { postId } = useParams();
    useEffect(() => {
        getPost(postId);
    }, [getPost, dispatch]);
    return(
        <div>
           <Show post={post} loading={loading}></Show>
           <button onClick={() => goToHome(history)} className="btn btn-primary">home</button>
        </div>
    )
}

export default connect(
    ({post, loading}) => ({
        post: post.post,
        loading: loading['post/GET_POST'],
    }),
    {
        getPost,
    }
)(ShowContainer);
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
    let { postId } = useParams();
    useEffect(() => {
        getPost(postId);
    }, [getPost]);
    return(
        <div>
           <Show post={post} loading={loading}></Show>
           <button onClick={() => history.goBack()} className="btn btn-primary">back</button>
           <button className="btn btn-secondary mx-2">edit</button>
           <button className="btn btn-danger">delete</button>
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
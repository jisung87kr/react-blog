import Show from '../component/Show';
import ShowActionButtonContainer from "../container/ShowActionButtonContainer";
import {getPost, setInitial} from '../module/post';
import { connect } from 'react-redux';
import React, {useEffect } from 'react';
import { useParams } from "react-router-dom";

function ShowContainer({post, loading, getPost, setInitial})
{
    let { postId } = useParams();
    useEffect(() => {
        getPost(postId);
        return () => {
            setInitial();
        }
    }, [getPost]);
    return(
        <div>
           <Show post={post} loading={loading}></Show>
           <ShowActionButtonContainer />
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
        setInitial
    }
)(ShowContainer);
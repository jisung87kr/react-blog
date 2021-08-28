import Create from '../component/Create';
import CreateActionButtonContainer from '../container/CreateActionButtonContainer';
import { changeFeild, createPost, getPost, editPost, setInitial } from '../module/post';
import { connect, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function CreateContainer({title, content, changeFeild, createPost, getPost, postData})
{
    let { postId } = useParams();
    const dispatch = useDispatch();
    const onChangeFeild = (event) => {
        changeFeild(
            {
                key: event.target.name,
                value: event.target.value
            }
        );
    }

    useEffect(() => {
        if(postId){
            getPost(postId);
        }
        return () => {dispatch(setInitial())};
    }, [getPost]);

    return(
        <div>
           <Create title={title} content={content} onChangeFeild={onChangeFeild} createPost={createPost}></Create>
           <CreateActionButtonContainer/>
        </div>
    )
}

export default connect(
    ({post}) => ({
        title: post.post.title,
        content: post.post.content,
        postData: post.post,
        response: post.response
    }),
    {
        changeFeild,
        createPost,
        getPost
    }
)(CreateContainer);
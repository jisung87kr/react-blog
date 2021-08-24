import React, { useEffect } from 'react';
import Create from '../component/Create';
import { changeFeild, createPost, setInitial } from '../module/post';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateContainer({title, content, changeFeild, createPost, response, setInitial})
{
    const dispatch = useDispatch();
    if(response){
        dispatch(setInitial());
    }
    return(
        <div>
           {response && <Redirect to={`/posts/${response.id}`}/>}
           <Create title={title} content={content} changeFeild={changeFeild} createPost={createPost}></Create>
        </div>
    )
}

export default connect(
    ({post}) => ({
        title: post.title,
        content: post.content,
        response: post.response,
    }),
    {
        changeFeild,
        createPost,
        setInitial
    }
)(CreateContainer);
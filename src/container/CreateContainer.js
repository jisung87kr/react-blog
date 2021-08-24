import React, { useEffect } from 'react';
import Create from '../component/Create';
import CreateActionButtonContainer from '../container/CreateActionButtonContainer';
import { changeFeild, createPost, setInitial } from '../module/post';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateContainer({title, content, changeFeild, createPost})
{
    return(
        <div>
           <Create title={title} content={content} changeFeild={changeFeild} createPost={createPost}></Create>
           <CreateActionButtonContainer/>
        </div>
    )
}

export default connect(
    ({post}) => ({
        title: post.title,
        content: post.content,
    }),
    {
        changeFeild,
        createPost,
    }
)(CreateContainer);
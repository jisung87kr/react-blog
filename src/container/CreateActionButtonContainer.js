import CreateContainer from '../component/CreateActionButton';
import { withRouter } from 'react-router-dom';
import { createPost } from '../module/post';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CreateActionButtonContainer = ({history}) => {
    const dispatch = useDispatch();
    const {title, content, post} = useSelector(({post}) => ({
        title: post.title,
        content: post.content,
        post : post.response
    }));

    const onSubmit = () => {
        const params = {
            title : title,
            content : content,
        }
        dispatch(createPost(params));
    }

    const onCancle = () => {
        history.goBack();
    }

    useEffect(() => {
        if(post){
            history.push(`posts/${post.id}`);
        }
    });

    return (
        <CreateContainer onCancle={onCancle} onSubmit={onSubmit}/>
    )
}

export default withRouter(CreateActionButtonContainer);
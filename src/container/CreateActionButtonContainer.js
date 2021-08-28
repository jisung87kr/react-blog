import CreateContainer from '../component/CreateActionButton';
import { withRouter} from 'react-router-dom';
import { createPost, updatePost, setInitial } from '../module/post';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CreateActionButtonContainer = ({history}) => {
    const dispatch = useDispatch();
    const {title, content, response, postData} = useSelector(({post}) => ({
        title: post.post.title,
        content: post.post.content,
        response : post.response,
        postData: post.post
    }));

    const onSubmit = () => {
        let params = {
            title : title,
            content : content,
        }
        if(postData.id){
            params = {
                ...params,
                id: postData.id,
            }
            dispatch(updatePost(params));
        } else {
            dispatch(createPost(params));
        }
    }

    const onCancle = () => {
        history.goBack();
    }

    useEffect(() => {

        if(response){
            history.push(`/posts/${response.id}`);
            dispatch(setInitial());
        }
    });

    return (
        <CreateContainer onCancle={onCancle} onSubmit={onSubmit}/>
    )
}

export default withRouter(CreateActionButtonContainer);
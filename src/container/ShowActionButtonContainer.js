import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter, useParams} from 'react-router-dom';
import ShowActionButton from "../component/ShowActionButton";
import {deletePost, setInitial} from "../module/post";

const ShowActionButtonContainer = ({history}) => {
    let {postId} = useParams();
    let {post, loading} = useSelector(({post, loading}) => ({
        post: post.post,
        loading: loading['post/GET_POST'],
    }));
    const dispatch = useDispatch();
    const onEdit = () => {
        history.push(`/create/${postId}`);
        dispatch(setInitial());
    }

    const goBack = () => {
        history.goBack();
    }

    const onDelete = () => {
        if (window.confirm('삭제 하시겠습니까')) {
            dispatch(deletePost(postId));
            goBack();
        }
    }

    useEffect(() => {
        if( loading === false ){
            console.log(post.id);
        }
    });

    return (
        <ShowActionButton goBack={goBack} onEdit={onEdit} onDelete={onDelete}/>
    )
}

export default withRouter(ShowActionButtonContainer);
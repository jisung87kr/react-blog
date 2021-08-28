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
        dispatch(deletePost(postId));
    }

    useEffect(() => {

    });

    return (
        <ShowActionButton goBack={goBack} onEdit={onEdit} onDelete={onDelete}/>
    )
}

export default withRouter(ShowActionButtonContainer);
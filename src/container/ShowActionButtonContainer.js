import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter, useParams, Redirect} from 'react-router-dom';
import ShowActionButton from "../component/ShowActionButton";
import {deletePost, setInitial, getList} from "../module/post";

const ShowActionButtonContainer = ({history}) => {
    let {postId} = useParams();
    let {post, failureLoading} = useSelector(({post, loading}) => ({
        post: post.post,
        failureLoading: loading['loading/FAILURE_LOADING'],
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
            dispatch(getList());
            history.push('/');
        }
    }

    useEffect(() => {
        if(failureLoading && failureLoading['error'].status === 404){
            alert('데이터가 없습니다.');
            history.push('/');
        }
    });

    return (
        <ShowActionButton goBack={goBack} onEdit={onEdit} onDelete={onDelete}/>
    )
}

export default withRouter(ShowActionButtonContainer);
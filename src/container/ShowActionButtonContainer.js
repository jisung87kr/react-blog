import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {withRouter, useParams} from 'react-router-dom';
import ShowActionButton from "../component/ShowActionButton";
import {getPost, setInitial} from "../module/post";

const ShowActionButtonContainer = ({history}) => {
    let {postId} = useParams();
    const dispatch = useDispatch();
    const onEdit = () => {
        history.push(`/create/${postId}`);
        dispatch(setInitial());
    }

    const goBack = () => {
        history.goBack();
    }

    const onDelete = () => {

    }

    useEffect(()=>{

    }, getPost);

    return (
        <ShowActionButton goBack={goBack} onEdit={onEdit} onDelete={onDelete}/>
    )
}

export default withRouter(ShowActionButtonContainer);
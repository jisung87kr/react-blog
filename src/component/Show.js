import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";

function Show({post, loading})
{
    return(
        <div>
            {loading && 'loading...'}
            {!loading && post && (
                <div>
                    <h1>{post.title}</h1>
                    <small>{post.created_at}</small>
                    <hr/>
                    <div>{post.content}</div>
                    <hr/>
                </div>
            )}
        </div>
    );
}

export default Show;
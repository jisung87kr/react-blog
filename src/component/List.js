import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import Show from './Show';

function List({posts, loading}){
    let match = useRouteMatch();
    return(
        <div className="">
            {loading && 'loading...'}
            <table className="table table-boared">
                <thead>
                <tr>
                    <th>no</th>
                    <th>title</th>
                    <th>author</th>
                    <th>created_at</th>
                </tr>
                </thead>
                <tbody>
                {posts &&
                    posts.data.map( post => (
                        <tr>
                            <td>{post.id}</td>
                            <td>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </td>
                            <td>{post.user_id}</td>
                            <td>{post.created_at}</td>
                        </tr>
                    ) )
                }
                </tbody>
            </table>
        </div>
    )
}

export default List;
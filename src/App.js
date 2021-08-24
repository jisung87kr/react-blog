import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
import './App.css';

import CreateContainer from "./container/CreateContainer";
import ListContainer from "./container/ListContainer";
import ShowContainer from "./container/ShowContainer";

function App() {
    return (
        <div>
            <div className="app">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">blog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/test">test</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create">write</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container py-5">
                <Switch>
                    <Route path="/" exact component={ListContainer} />
                    <Route path="/create" component={CreateContainer} />
                    <Route path="/posts/:postId" component={ShowContainer} />
                    <Route path="/test" component={Test} />
                </Switch>
            </div>
        </div>
    )
}

function Test({history})
{
    return (
        <div>
            <div>test</div>
            <button onClick={() => history.push('/')}>home</button>
        </div>
    )
}

export default App;

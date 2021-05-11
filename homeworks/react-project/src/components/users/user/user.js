import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function User({data, url}) {
    console.log(url);
    return <div className={'post'}>
        <h4>№{data.id}. {data.name}</h4>
        <Link to={url+ '/' + data.id }>User {data.id} details</Link>

    </div>
}
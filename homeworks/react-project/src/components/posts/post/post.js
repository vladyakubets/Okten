import {Link} from "react-router-dom";

export default function Post({data, url}) {
    if (url.startsWith('/users')) {
        return <div>
            <h4>User: {data.userId} post №{data.id}. <br/>Title: {data.title}</h4>
            <p>{data.body}</p>
        </div>
    }
    return <div className={'post'}>
        <h4>№{data.id}. {data.title}</h4>
        <Link to={{pathname: `${url + '/' + data.id}`, state: data}}>Post {data.id} user details</Link>
    </div>
}
import {
    Link
} from "react-router-dom";

export default function User({data, url}) {
    if (!url) {
        return <div>
            this post was bade by {data.name}
        </div>
    }
    return <div className={'post'}>
        <h4>№{data.id}. {data.name}</h4>
        <Link to={{pathname: `${url + '/' + data.id}`, state: data}}>User {data.id} posts</Link>

    </div>
}
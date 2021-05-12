import {Link} from "react-router-dom";

export default function Post({data,url}){
    return <div className={'post'}>
        <h4>№{data.id}. {data.title}</h4>
        <Link to={url+ '/' + data.id }>Post {data.id} details</Link>
    </div>
}
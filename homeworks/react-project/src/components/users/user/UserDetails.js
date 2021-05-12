import {useEffect, useState} from "react";
import {axiosInstance} from "../../../services/api";
import Post from "../../posts/post/post";

export default function UserDetails(props) {
    let {match: {params: {id}, url}} = props;
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosInstance(`posts/?userId=${id}`).then(value => setPosts(value.data))
    }, [])
    return (<div>
        {
            posts.map(value => <Post key={value.id} data={value} url={url}/>)
        }
    </div>)
}
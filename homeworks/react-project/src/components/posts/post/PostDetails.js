import {useEffect, useState} from "react";
import {axiosInstance, getUsers} from "../../../services/api";

export default function PostDetails({postId}) {
    let [post, setPost] = useState(null);
    useEffect(() => {
        axiosInstance(`posts/` + postId).then(value => setPost(value.data))
    }, [])
    console.log(post);
    return (<div>
        {
            post && <div>
                <h3>title: {post.title}</h3> <br/>
                body: {post.body} <br/>
            </div>
        }
    </div>)
}
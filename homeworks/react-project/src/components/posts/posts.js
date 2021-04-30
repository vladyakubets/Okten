import getPosts from '../../services/api'
import {useEffect, useState} from "react";
import Post from "./post/post";


export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState({});

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])

    const desc = (id) => {
        post = posts.find(value => value.id === id)
        console.log(post.body);
    }

    return <div>
        <div>
            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        data={value}
                        desc={desc}
                    />)

            }

        </div>
        <div>
            {
                post && <h2>{post.body}</h2>
            }
        </div>

    </div>
}
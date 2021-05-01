import getPosts from '../../services/api'
import {useEffect, useState} from "react";
import Post from "./post/post";
import './posts.css';

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])

    const findUser = (id) => {
        post = posts.find(value => value.id === id)
        setPost(post);
    }
    const deletePost = (id) => {
        setPosts(posts.filter((value, index) => value.id !== id));
    }
    return <div className={'wrapper'}>
        <div className={'posts-wrap'}>
            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        data={value}
                        findUser={findUser}
                        deletePost={deletePost}
                    />)

            }

        </div>
        <div>
            {
                post && <div><h3>user {post.userId} post body:</h3><p>{post.body}</p></div>
            }
        </div>

    </div>
}
import {getPosts} from '../../services/api'
import {useEffect, useState} from "react";
import Post from "./post/post";
import './posts.css';

export default function Posts({match: {url}}) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])


    return <div className={'wrapper'}>
        <div className={'posts-wrap'}>
            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        data={value}
                        url={url}
                    />)

            }

        </div>


    </div>
}
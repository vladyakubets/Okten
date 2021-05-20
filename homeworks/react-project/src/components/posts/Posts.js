import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SET_POSTS, SET_POSTS_LOADING} from "../../redux";

export default function Posts() {
    const {posts, isLoading} = useSelector(({posts: {posts, isLoading}}) => (
        {
            posts,
            isLoading
        }
    ));
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch({type: SET_POSTS_LOADING})
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();

            setTimeout(() => {
                dispatch({type: SET_POSTS, payload: data});
            }, 500)


        } catch (e) {
            console.log(e, "ERROR");
        }
    }


    useEffect(() => {
        fetchPosts();
    }, [])

    if (isLoading) {
        return (
            <h1>Loading posts</h1>
        )
    }

    return (
        <div>
            {
                posts.map(post => <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>)
            }

        </div>
    )
}
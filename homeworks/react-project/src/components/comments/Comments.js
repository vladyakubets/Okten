import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    SET_COMMENTS,
    SET_COMMENTS_LOADING

} from "../../redux";

export default function Comments() {
    const {comments, isLoading} = useSelector(({comments: {comments, isLoading}}) => (
        {
            comments,
            isLoading
        }
    ));
    const dispatch = useDispatch();

    const fetchComments = async () => {
        try {
            dispatch({type: SET_COMMENTS_LOADING})
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json();

            setTimeout(() => {
                dispatch({type: SET_COMMENTS, payload: data});
            }, 500)


        } catch (e) {
            console.log(e, "ERROR");
        }
    }


    useEffect(() => {
        fetchComments();
    }, [])

    if (isLoading) {
        return (
            <h1>Loading comments</h1>
        )
    }

    return (
        <div>
            {
                comments.map(comment => <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>)
            }

        </div>
    )
}
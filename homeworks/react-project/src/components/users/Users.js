import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SET_USERS, SET_USERS_LOADING} from "../../redux";

export default function Users() {
    const {users, isLoading} = useSelector(({users: {users, isLoading}}) => (
        {
            users,
            isLoading
        }
    ));
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        try {
            dispatch({type: SET_USERS_LOADING})
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();

            setTimeout(() => {
                dispatch({type: SET_USERS, payload: data});
            }, 500)


        } catch (e) {
            console.log(e, "ERROR");
        }
    }


    useEffect(() => {
        fetchUsers();
    }, [])

    if (isLoading) {
        return (
            <h1>Loading users</h1>
        )
    }

    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>)
            }

        </div>
    )
}
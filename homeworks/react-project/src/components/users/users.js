import {getUsers} from '../../services/api'
import {useEffect, useState} from "react";

import './users.css';
import User from "./user/user";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    const findUser = (id) => {
        user = users.find(value => value.id === id)
        setUser(user);
    }
    const deleteUser = (id) => {
        setUsers(users.filter((value) => value.id !== id));
    }
    return <div className={'wrapper'}>
        <div className={'posts-wrap'}>
            {
                users.map(value =>
                    <User
                        key={value.id}
                        data={value}
                        findUser={findUser}
                        deleteUser={deleteUser}
                    />)

            }

        </div>
        <div>
            {
                user &&
                <div>
                    <h2>user {user.name}</h2>
                    <h3>address:</h3>
                    <p>city:{user.address.city}</p>
                    <p>street:{user.address.street}</p>
                </div>
            }
        </div>

    </div>
}
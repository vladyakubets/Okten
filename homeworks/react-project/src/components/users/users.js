import {getUsers} from '../../services/api'
import {useEffect, useState} from "react";

import './users.css';
import User from "./user/user";

export default function Users({match: {url}}) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])


    return <div className={'wrapper'}>
        <div className={'posts-wrap'}>
            {
                users.map(value =>
                    <User
                        key={value.id}
                        data={value}
                        url={url}
                    />)

            }

        </div>


    </div>
}
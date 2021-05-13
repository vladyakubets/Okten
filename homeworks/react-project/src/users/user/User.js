import {Link} from "react-router-dom";

export default function User({user}) {
    return (
        <div>
            {user.first_name} - {user.last_name}
            <Link to={{pathname: `user/${user.id}`, state: {user}}}>
                - user details
            </Link>
        </div>
    )
}
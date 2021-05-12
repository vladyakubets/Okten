import {useEffect, useState} from "react";
import {axiosInstance} from "../../../services/api";

export default function PostDetails(props) {
    let {location: {state}} = props;
    let [user, setUser] = useState(null);
    useEffect(() => {
        axiosInstance(`${'users/?id=' + state.userId}`).then(value => setUser(value.data[0]))
    }, [props.match.params.id])
    return (<div>
        {
            user && <div>{user.name} posted this post</div>
        }

    </div>)
}
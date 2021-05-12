import {useEffect, useState} from "react";
import {axiosInstance, getUsers} from "../../../services/api";

export default function UserDetails({userId}){
    let [user, setUser] = useState(null);
    useEffect(()=>{
        axiosInstance(`users/`+userId).then(value => setUser(value.data))
    },[])

    return(<div>
        {
            user && <div>
                Name: {user.name} <br/>
                Phone: {user.phone} <br/>
                Email: {user.email} <br/>
                Address: {user.address.city} - {user.address.street} - {user.address.suite} <br/>
                Company: {user.company.name} <br/>
            </div>
        }
    </div>)
}
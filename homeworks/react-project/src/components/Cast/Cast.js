import {useEffect, useState} from "react";
import {getCast} from "../../services/api";
import CastPerson from "../CastPerson/CastPerson";

export default function Cast({url}) {
    let [cast, setCast] = useState([]);

    useEffect(() => {
        getCast().then(value => setCast(value.data))
    }, []);

    return <div>
        {
            cast.map(person => <CastPerson key={person.id} person={person} url={url}/>)
        }
    </div>
}
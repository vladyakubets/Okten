import {useEffect, useState} from "react";
import {axiosInstance} from "../../services/api";

export default function CastPersonDetails({personId}) {
    let [person, setPerson] = useState(null);

    useEffect(() => {
        axiosInstance(`cast/${personId}`).then(value => setPerson(value.data))
    }, []);

    console.log(person);
    return (<div>

        {person && <div>Name: {person.name} <br/>
            Born: {person.born}<br/>
            Text: {person.bio.text}<br/>
            url: {person.bio.url}</div>}
    </div>)
}


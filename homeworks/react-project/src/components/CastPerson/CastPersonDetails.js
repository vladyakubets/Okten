import {useEffect, useState} from "react";
import {getCast} from "../../services/api";

export default function CastPersonDetails({personId}) {
    let [chosenPerson, setPerson] = useState({})
    let [persons, setPersons] = useState([])

    useEffect(() => {
        getCast().then(value => setPersons(value.data))
    }, []);

    console.log(persons);
    setPerson(persons.find(value => value.id === personId));



    return <div>
        person {personId}
    </div>
}
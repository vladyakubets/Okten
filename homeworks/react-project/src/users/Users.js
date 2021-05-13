import {useEffect, useState} from "react";
import User from "./user/User";

export default function Users() {
    let [page, setPage] = useState(null);
    let [counter, setCounter] = useState(1);


    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + counter)
            .then(value => value.json())
            .then(value => setPage(value));

    }, [counter])

    const counterUp = () => {
        if (page.total_pages > counter) {
            setCounter(++counter)
            console.log(counter);
        }
        if (page.total_pages === counter) {
            document.getElementById("next").disabled = true;
            document.getElementById("prev").disabled = false;

        }

    }
    const counterDown = () => {
        console.log(counter);
        if (counter > 1) {
            setCounter(--counter)
            console.log(counter);
        }
        if (counter === 1) {
            document.getElementById("prev").disabled = true;
            document.getElementById("next").disabled = false;
        }
    }
    return <div>
        {
            page && page.data.map(value => <User key={value.id} user={value}/>)
        }
        <button id='prev' onClick={() => counterDown()} >previous</button>
        <button id='next' onClick={() => counterUp()} >next</button>
    </div>

}
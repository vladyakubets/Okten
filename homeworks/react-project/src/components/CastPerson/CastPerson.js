import {Link} from "react-router-dom";

export default function CastPerson({person,url}) {

    return <div>
        Name: {person.name} -
        <Link to={url+"/aboutPerson"+person.id}> About</Link>

    </div>
}
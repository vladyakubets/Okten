import {Link} from "react-router-dom";

export default function InventoryItem({item,url}) {

    return <div>
        Title: {item.title} -
        <Link to={url+"/aboutItem"+item.id}> About</Link>

    </div>
}
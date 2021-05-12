import {useEffect, useState} from "react";
import {axiosInstance} from "../../services/api";

export default function InventoryItemDetails({itemId}) {
    let [item, setItem] = useState(null);

    useEffect(() => {
        axiosInstance(`inventory/${itemId}`).then(value => setItem(value.data))
    }, []);

    console.log(item);
    return (<div>

        {item && <div>title: {item.title} <br/>
            Category: {item.category}<br/>
            Description: {item.description}<br/>
            Price: {item.price}<br/>
            Slogan: {item.slogan}</div>}
    </div>)
}
import {useEffect, useState} from "react";
import {getInventory} from "../../services/api";
import CastPerson from "../CastPerson/CastPerson";
import InventoryItem from "../InventoryDetails/InventoryItem";

export default function Inventory({url}) {
    let [inventory, setInventory] = useState([]);

    useEffect(() => {
        getInventory().then(value => setInventory(value.data))
    }, []);
    console.log(inventory);
    return <div>
        {
            inventory.map(item => <InventoryItem key={item.id} item={item} url={url}/>)
        }
    </div>
}
import axios from 'axios'


let axiosInstance = axios.create({
    baseURL: 'https://api.sampleapis.com/futurama/',
});
async function getCast() {
    return await axiosInstance.get('cast');
}

async function getInventory() {
    return await axiosInstance.get('inventory');
}

export {getCast, getInventory};

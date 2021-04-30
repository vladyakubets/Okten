import axios from 'axios'

let axiosInstance =  axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
});

async function getPosts(){
    return await axiosInstance.get('posts');
}
export default getPosts;



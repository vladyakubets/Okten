export default function Post({data, findUser,deletePost}){
    return <div className={'post'}>
        <h4>№{data.id}. {data.title}</h4>
        <button onClick={() => findUser(data.id)}>show description</button>
        <button onClick={() => deletePost(data.id)}>delete post</button>
    </div>
}
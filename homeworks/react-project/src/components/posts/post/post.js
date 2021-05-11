export default function Post({data, findPost,deletePost}){
    return <div className={'post'}>
        <h4>№{data.id}. {data.title}</h4>
        <button onClick={() => findPost(data.id)}>show description</button>
        <button onClick={() => deletePost(data.id)}>delete post</button>
    </div>
}
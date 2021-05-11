export default function User({data, findUser,deleteUser}){
    return <div className={'post'}>
        <h4>№{data.id}. {data.name}</h4>
        <button onClick={() => findUser(data.id)}>show description</button>
        <button onClick={() => deleteUser(data.id)}>delete user</button>
    </div>
}
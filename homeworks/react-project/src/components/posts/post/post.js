export default function Post({data, desc}){
    return <div>
        <h4>№{data.id}. {data.title}</h4>
        <button onClick={() => desc(data.id)}>show description</button>
    </div>
}
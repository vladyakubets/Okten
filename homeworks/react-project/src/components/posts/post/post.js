export default function Post({data}){
    return <div className={'post'}>
        <h4>№{data.id}. {data.title}</h4>

    </div>
}
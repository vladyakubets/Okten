export default function UserDetails(props){
    let{location:{state: {user}}}=props;
    return <div>
        <h3>Name: {user.first_name + ' ' + user.last_name}</h3>
        <img src={user.avatar} alt=""/>
        <p>Email: {user.email}</p>
    </div>
}
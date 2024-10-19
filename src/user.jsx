export default function User ({user}){
    const {name,adderss,email,id} = user
    return (
        <div className="box">
            <h3>name : {name}</h3>
            <p>ID :{id}</p>
            
            <p>Email : {email}</p>
        </div>
    )
}
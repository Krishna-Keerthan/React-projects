import React , {useContext,useState} from "react";
import UserContext from "../context/userContext";


const Login = ()=>{

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {setUser} = useContext(UserContext)
    const handleEvent = (e)=>{
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <>
        <div>
            <h2>login</h2>
            <input type="text" 
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"/>
            <br />
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={(e)=>handleEvent(e)}>Submit</button>
        </div>
        </>
    )
}

export default Login;

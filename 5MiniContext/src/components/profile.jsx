import React , {useState , useContext} from "react";
import UserContext from "../context/userContext";

const Profile = ()=>{

    const {user} = useContext(UserContext)
    if (!user) return "Please Login"
    return (
        <>
        <h2>Welcome! , {user.username}</h2>
        </>
    )
}

export default Profile;
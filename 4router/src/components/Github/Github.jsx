import React from "react";
import { useEffect,useState } from "react"; 
import  {useLoaderData} from 'react-router-dom'

function Github(){

    const data = useLoaderData();

    // const [data ,setData] =useState([])
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Krishna-Keerthan')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //         }      )
    // },[])
    
    
    return (
        <>
        <div className="bg-gray-700 text-amber-50">UserId:{data.id}</div>
        </>
    )
}

export default Github;

export const load =async ()=>{
    const res = await fetch('https://api.github.com/users/Krishna-Keerthan')
    return res.json()
}


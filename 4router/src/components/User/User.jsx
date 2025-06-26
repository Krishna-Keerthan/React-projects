import React from "react";
import { useParams } from "react-router-dom";
function User(){

    const {userid} = useParams();
    return (
        <>
        <div className="bg-gray-700 text-amber-50">UserId:{userid}</div>
        </>
    )
}

export {User};
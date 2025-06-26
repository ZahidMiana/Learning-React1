import React from 'react'
import { useParams } from 'react-router-dom';

export function User() {
    const { id } = useParams(); 
    return (
       <div className="bg-orange-600 text-white text-3xl p-4">User: {id}</div>
    )
}

export default User

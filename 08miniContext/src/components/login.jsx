import React from 'react'
import {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

export function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input 
                type='text' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
                className="border border-gray-300 p-2 mb-2 rounded w-full"
            />

            <input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className="border border-gray-300 p-2 mb-2 rounded w-full"
            />

            <button 
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    )
}

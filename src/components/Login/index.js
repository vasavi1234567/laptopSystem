import React, {useState} from 'react'
import axios from 'axios'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post('http://localhost:4000/login', {username, password})
            alert(result.data.message)
        } catch (event) {
            alert('Invalid Login')
        }
    }
    return (
        <form className="form-container" onSubmit={{loginHandler}}>
            <input type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
            <input type="password" value={password} placeholder="Password" onchange={(event) => setPassword(event.target.value)} />
            <button type="button" onClick={loginHandler}>Login</button>
        </form>
    )
}

export default Login

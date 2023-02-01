import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

export default function Register({ currentUser, setCurrentUser }) {
	// state for the controlled form
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	// submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post fortm data to the backend
			const reqBody = {
				name,
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
			if (err.response) {
				setMsg(err.response.data.msg)
			}
		}
	}

	// conditionally render a navigate component
	if (currentUser) {
		return <Navigate to="/profile" />
	}

	return (
		<>
			<h1 className='w-75 mx-auto'>Register for an account:</h1>

				<p>{msg}</p>

			<div className="form-floating mx-auto w-25 mb-3 mt-4">
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name:</label>
					<input 
						className="form-control text-center mb-3"
						type="text"
						id="name"
						placeholder='Username'
						onChange={e => setName(e.target.value)}
						value={name}
					/>

					<label htmlFor='email'>Email:</label>
					<input 
						className="form-control text-center mb-3"
						type="email"
						id="email"
						placeholder='Email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>

					<label htmlFor='password'>Password:</label>
					<input 
						className="form-control text-center mb-3"
						type="password"
						id="password"
						placeholder='Password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>

					<button className="btn btn-primary mt-3" type="submit">Register</button>
				</form>
			</div>
		</>
	)
}
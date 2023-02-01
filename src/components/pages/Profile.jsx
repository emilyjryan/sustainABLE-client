import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FavoritesList from '../FavoritesList'

export default function Profile({ currentUser, handleLogout }) {

	// ********list all favorite habits from the habits model********


	// state for the secret message (aka user privilaged data)
	const [msg, setMsg] = useState('')
	const [favs, setFavs] = useState({
		favHabits: []
	})
	
	const navigate = useNavigate()

	// useEffect for getting the user data and checking auth
	useEffect(() => {
		const fetchData = async () => {
				try {
					// get the token from local storage
					const token = localStorage.getItem('jwt')
					// make the auth headers
					const options = {
						headers: {
							'Authorization': token
						}
					}
					// hit the auth locked endpoint
					const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/favorites`, options)
					setFavs({favHabits: [...favs.favHabits, ...response.data.favHabits]})
				} catch (err) {
					// if the error is a 401 -- that means that auth failed
					console.warn(err)
					if (err.response) {
						if (err.response.status === 401) {
							// panic!
							handleLogout()
							// send the user to the login screen
							navigate('/login')
						}
					}
				}
			}
			fetchData()
	}, []) // only fire on the first render of this component

// map

	return (
		<>
		<div style= {{color: "#F7F9FB"}}>
			<div style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
			<h1 className="text-center p-4">Hello, {currentUser?.name}!</h1>

			<p className="w-75 mx-auto">Logged in as: {currentUser?.email}</p>

			<p className="w-75 mx-auto">Welcome to your profile!</p>
			<br></br>
			</div>
			<h3 className="w-75 mx-auto">Favorite Habits:</h3>
			<FavoritesList favs={favs}/>
		</div>
		</>
	)
}

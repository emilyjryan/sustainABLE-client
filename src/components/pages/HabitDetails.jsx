import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

// export default function HabitDetails = (props) => {     
export default function HabitDetails(props) {

    const [habit, setHabit] = useState({})

    const {id} = useParams()
    
    useEffect(() => {
        const fetchHabit = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/habits/${id}`)
                const details = response.data.habitDetails
                setHabit(details)
            } catch (err) {
                console.log('useEffect HabitDetails.jsx', err)
            }
        }
        fetchHabit()
    }, [])

    const handleAddToFavs = e => {
        // add the habit to the user's favorites
        e.preventDefault()
        const body = {
            id: id
        }
        const token = localStorage.getItem('jwt')
        // make the auth headers
        const options = {
            headers: {
                'Authorization': token
            }
        }

        const fav = axios.post(`${process.env.REACT_APP_SERVER_URL}/favorites`, body, options)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log('error with post favs route', err)
        })
    }

    return (
        <div>
            Habit details
            {/* show the details of the selected habit */}
            {/* show card with image of the habit */}

            <h1>{habit?.habit}</h1>
            <h3>{habit?.description}</h3>
            <img src={habit?.imgURL} alt={habit?.habit}/>

            {/* add to favorites button */}
            <form onSubmit={handleAddToFavs}>
                {/* <input hidden type='text' id='id' value={habit?._id} /> */}
                <button type='submit'>Add to Favs</button>
            </form>


        </div>
    )
}
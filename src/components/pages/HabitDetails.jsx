import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { navigate, useNavigate } from "react-router-dom"

// export default function HabitDetails = (props) => {     
export default function HabitDetails(props) {

    const [habit, setHabit] = useState({})

    const navigate = useNavigate()

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
            navigate('/')
        })
        .catch(err => {
            console.log('error with post favs route', err)
        })
    }

    return (
        <>
         Habit Details!
         <div className='mx-auto mt-3'>
            <div className="card mx-auto mt-3 bg-success" style={{width: '40rem', height: '30rem'}}>
                <img className='mx-auto mt-3' style={{width: '18rem', height: '15rem'}} src={habit?.imgURL} alt={habit?.habit}/>
            <div className="card-body">
                <h5 className="card-title">{habit?.habit}</h5>
                <p className="card-text">{habit?.description}</p>
            {/* add to favorites button */}
            <form className='mt-3' onSubmit={handleAddToFavs}>
                {/* <input hidden type='text' id='id' value={habit?._id} /> */}
                <button className='btn btn-secondary' type='submit'>Add to Favorites</button>
            </form>
            </div>
            </div>

        </div>
        </>
    )
}
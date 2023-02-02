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
            navigate('/users/:id')
        })
        .catch(err => {
            console.log('error with post favs route', err)
        })
    }

    return (
        <>
        <h1 className="card form-floating mx-auto mb-3 mt-4 text-center p-4" style={{backgroundColor: "rgba(0,0,0,0.4)", color: '#f7f9fb', maxWidth: '500px'}}>Habit Details:</h1>
            <div className='mx-auto mt-3'>
                <div className="card m-3 mx-auto" style={{maxWidth: '40rem', minHeight: '30rem', backgroundColor: 'rgba(141,161,120,0.7'}}>
                    <h3 className="card-title mt-3">{habit?.habit}</h3>
                    <img className='mx-auto mt-3' style={{width: '18rem', height: '15rem'}} src={habit?.imgURL} alt={habit?.habit}/>
                    <div className="card-body">
                        <p className="card-text">{habit?.description}</p>
                        {/* add to favorites button */}
                        <form className='mt-3' onSubmit={handleAddToFavs}>
                        {/* <input hidden type='text' id='id' value={habit?._id} /> */}
                            <button className="btn mt-3" style={{backgroundColor: '#4a4b25', color: '#f7f9fb'}} type='submit'>Add to Favorites</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
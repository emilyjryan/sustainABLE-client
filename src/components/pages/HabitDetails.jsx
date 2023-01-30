import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

// export default function HabitDetails = (props) => {     
export default function HabitDetails(props) {

    const [habit, setHabit] = useState({})

    const {id} = useParams()
    console.log('id', typeof id)

    

    useEffect(() => {
        const fetchHabit = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/habits/${id}`)
                const details = response.data.habitDetails
                console.log('details', details)
                setHabit(details)
                console.log(habit)
            } catch (err) {
                console.log('useEffect HabitDetails.jsx', err)
            }
        }
        fetchHabit()
    }, [])

    return (
        <div>
            Habit details
            {/* show the details of the selected habit */}
            {/* show card with image of the habit */}

            <h1>{habit?.habit}</h1>
            <h3>{habit?.description}</h3>
            <img src={habit?.imgURL} alt={habit?.habit}/>

            {/* add to favorites button */}


        </div>
    )
}
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

// export default function HabitDetails = (props) => {     
export default function HabitDetails(props) {

    const [habit, setHabit] = useState({})

    const {id} = useParams()

    

    useEffect(() => {
        const fetchHabit = async (res,req) => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/habits/${id}`)
                const details = response.data
                setHabit(details)
            } catch (err) {
                console.log(err)
            }
        }
        fetchHabit()
    }, [])

    return (
        <div>
            Habit details
            {/* show the details of the selected habit */}
            {/* show card with image of the habit */}
            {/* add to favorites button */}

            <h1>{habit.habit}</h1>

        </div>
    )
}
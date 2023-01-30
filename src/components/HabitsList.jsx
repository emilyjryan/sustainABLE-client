import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function HabitsList() {
    // set up state for habits
    const [habits, setHabits] = useState([])
    // const [detailID, setDetailID] = useState('')

    // set up useEffect to get all habits from the habits model
    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/habits`)
                setHabits(response.data)
                console.log(response.data)
            } catch (err) {
                console.log('useEffect HabitsList.jsx', err)
            }
        }
        fetchHabits()
    }, [])

    

    const listHabits = habits.map((habit => {
        return (
            <div key={habit._id}>
                <h3>{habit.habit}</h3>
                <p>{habit.description}</p>
                {/* img url */}
                <button>
                    <a href={`/habits/${habit._id}`}>Details</a>
                </button>
            </div>
        )
    })) 

    return (
        <div>
            {/* map and list all habit from the habits model */}
            {listHabits}
        </div>
    )
}

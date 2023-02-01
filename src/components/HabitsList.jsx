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
            <div className="card mb-2" style={{width: '18rem', height: '20rem'}}>
                <img className="mx-auto mt-2" style={{width: '17rem', height: '13rem'}} src={habit?.imgURL} alt={habit?.habit}/>
            <div className="card-body">
                <h5 className="card-title">{habit?.habit}</h5>
                 <a href={`/habits/${habit._id}`} className="btn btn-primary">Details</a>
            </div>
            </div>
            </div>
        )
    }
    ))
    return (
        <div className='d-flex flex-wrap justify-content-around '>
            {/* map and list all habit from the habits model */}
            {listHabits}
        </div>
    )
}

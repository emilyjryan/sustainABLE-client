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

    // map through the habits and list them
    const listHabits = habits.map((habit => {
        return (
            <div key={habit._id}>
                <div className="card mb-2" style={{width: '18rem', height: '20rem', backgroundColor: '#98ab83'}}>
                    <img className="mx-auto mt-2" style={{width: '17rem', height: '13rem'}} src={habit?.imgURL} alt={habit?.habit}/>
                    <div className="card-body">
                        <h5 className="card-title">{habit?.habit}</h5>
                            <a href={`/habits/${habit._id}`} className="btn" style={{backgroundColor: '#4a4b25', color: '#f7f9fb'}}>Details</a>
                    </div>
                </div>
            </div>
        )
    }
    ))

    return (
        <div className='d-flex flex-wrap justify-content-around '>
            {listHabits}
        </div>
    )
}

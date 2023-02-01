import { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HabitsForm from '../HabitsForm'

export default function NewHabit() {

// set state for empty values of the new habit:
const [form, setForm] = useState({
    // start off with empty strings:
    habit: '',
    description: '',
    imgURL: '',
})

const navigate = useNavigate()

const handleSubmit = e => {
    e.preventDefault()
    // grab form data from state and post it to the backend
    axios.post(`${process.env.REACT_APP_SERVER_URL}/habits/new`, form)
    .then(res => {
        console.log(res.data)
        // redirect to the new habit's details page
        navigate(`/`)
    })
    .catch(err => console.log(err))
}

    return (
        <div>
            <h1 className='text-center p-4' style={{backgroundColor: "rgba(0,0,0,0.4)", color: '#f7f9fb'}}>Create a New Daily Sustainability Habit:</h1>
            <HabitsForm handleSubmit={handleSubmit} form={form} setForm={setForm}/>
        </div>
    )
}
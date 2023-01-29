import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import HabitsForm from '../HabitsForm'

export default function NewHabit() {

// set state for empty values of the new habit:
const [form, setForm] = useState({
    // start off with empty strings:
    habit: '',
    description: '',
    purpose: '',
    impact: '',
    timeSpent: '',
    imgURL: '',
})

const navigate = useNavigate()

const handleSubmit = e => {
    e.preventDefault()
    // grab form data from state and post it to the backend
    axios.post(`${process.env.REACT_APP_API_URL}/habits/new`, form)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
}


    return (
        <div>
            {/* create a new habit  */}
            <h1>Create a New Daily Sustainability Habit:</h1>
            {/* show form to create new habit from habitsform.jsx*/}
            <HabitsForm handleSubmit={handleSubmit} form={form} setForm={setForm}/>
        </div>
    )
}
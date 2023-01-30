import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import HabitsForm from '../HabitsForm'

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
        <>
        <div>
            <h1>Create a New Daily Sustainability Habit:</h1>  
        </div>
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Habit name:</label>
            <input  
                type='text'
                id='name'
                placeholder="habit name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                />
            <label htmlFor="description">Description</label>
            <input  
                type='text'
                id='description'
                placeholder="description"
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                />
            <label htmlFor="purpose">Purpose:</label>
            <input  
                type='text'
                id='purpose'
                placeholder="purpose"
                value={form.purpose}
                onChange={e => setForm({ ...form, purpose: e.target.value })}
                />
            <label htmlFor="impact">Impact:</label>
            <input  
                type='text'
                id='impact'
                placeholder="impact"
                value={form.impact}
                onChange={e => setForm({ ...form, impact: e.target.value })}
                />
            <label htmlFor="timeSpent">Time required:</label>
            <input  
                type='text'
                id='timeSpent'
                placeholder="time required"
                value={form.timeSpent}
                onChange={e => setForm({ ...form, timeSpent: e.target.value })}
                />
            <label htmlFor="imgURL">Picture URL:</label>
            <input  
                type='text'
                id='imgURL'
                placeholder="picture URL"
                value={form.imgURL}
                onChange={e => setForm({ ...form, imgURL: e.target.value })}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
    )
    // return (
    //     <div>
    //         {/* create a new habit  */}
    //         <h1>Create a New Daily Sustainability Habit:</h1>

            
    //         {/* show form to create new habit from habitsform.jsx*/}
    //         <HabitsForm handleSubmit={handleSubmit} form={form} setForm={setForm}/>
    //     </div>
    // )
}
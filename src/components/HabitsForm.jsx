
export default function HabitsForm(props) {
    
    return (
        <div>
            {/* form to create a new habit */}
            <form onSubmit={props.handleSubmit()}>
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
                <label htmlFor="purpose">Habit name:</label>
                <input  
                    type='text'
                    id='purpose'
                    placeholder="purpose"
                    value={form.purpose}
                    onChange={e => setForm({ ...form, purpose: e.target.value })}
                    />
                <label htmlFor="name">Impact:</label>
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
            </form>
        </div>
    )
}
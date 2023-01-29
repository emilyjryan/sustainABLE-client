
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
                    value={props.form.name}
                    onChange={e => props.setForm({ ...props.form, name: e.target.value })}
                    />
                <label htmlFor="description">Description</label>
                <input  
                    type='text'
                    id='description'
                    placeholder="description"
                    value={props.form.description}
                    onChange={e => props.setForm({ ...props.form, description: e.target.value })}
                    />
                <label htmlFor="purpose">Habit name:</label>
                <input  
                    type='text'
                    id='purpose'
                    placeholder="purpose"
                    value={props.form.purpose}
                    onChange={e => props.setForm({ ...props.form, purpose: e.target.value })}
                    />
                <label htmlFor="name">Impact:</label>
                <input  
                    type='text'
                    id='impact'
                    placeholder="impact"
                    value={props.form.impact}
                    onChange={e => props.setForm({ ...props.form, impact: e.target.value })}
                    />
                <label htmlFor="timeSpent">Time required:</label>
                <input  
                    type='text'
                    id='timeSpent'
                    placeholder="time required"
                    value={props.form.timeSpent}
                    onChange={e => props.setForm({ ...props.form, timeSpent: e.target.value })}
                    />
                <label htmlFor="imgURL">Picture URL:</label>
                <input  
                    type='text'
                    id='imgURL'
                    placeholder="picture URL"
                    value={props.form.imgURL}
                    onChange={e => props.setForm({ ...props.form, imgURL: e.target.value })}
                    />
            </form>
        </div>
    )
}
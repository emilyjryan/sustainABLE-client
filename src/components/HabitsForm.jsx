
export default function HabitsForm(props) {
    
    return (
        <div>
            {/* form to create a new habit */}
            <form onSubmit={props.handleSubmit}>
                <div>
                <label htmlFor="habit">Habit name:</label>
                <input  
                    type='text'
                    id='habit'
                    placeholder="habit name"
                    value={props.form.habit}
                    onChange={e => props.setForm({ ...props.form, habit: e.target.value })}
                    />
                <label htmlFor="description">Description</label>
                <input  
                    type='text'
                    id='description'
                    placeholder="description"
                    value={props.form.description}
                    onChange={e => props.setForm({ ...props.form, description: e.target.value })}
                    />
                <label htmlFor="imgURL">Picture URL:</label>
                <input  
                    type='text'
                    id='imgURL'
                    placeholder="picture URL"
                    value={props.form.imgURL}
                    onChange={e => props.setForm({ ...props.form, imgURL: e.target.value })}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default function HabitsForm(props) {
    return (
        <div className="card form-floating mx-auto w-50 mb-3 mt-4 text-center p-4" style={{backgroundColor: "rgba(0,0,0,0.4)", color: '#f7f9fb'}}>
             <h1>Create a new daily sustainability habit:</h1>
            {/* form to create a new habit */}
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="habit">Habit name:</label>
                    <input  
                        className="form-control text-center mb-3" 
                        style={{backgroundColor: '#98ab83', color: '#f7f9fb'}}
                        type='text'
                        id='habit'
                        placeholder="name your habit here"
                        value={props.form.habit}
                        onChange={e => props.setForm({ ...props.form, habit: e.target.value })}
                        />
                    <label htmlFor="description">Description</label>
                    <input  
                        className="form-control text-center mb-3" 
                        style={{backgroundColor: '#98ab83', color: '#f7f9fb'}}
                        type='text'
                        id='description'
                        placeholder="describe your habit here"
                        value={props.form.description}
                        onChange={e => props.setForm({ ...props.form, description: e.target.value })}
                        />
                    <label htmlFor="imgURL">Picture URL:</label>
                    <input  
                        className="form-control text-center"
                        style={{backgroundColor: '#98ab83', color: '#f7f9fb'}}
                        type='text'
                        id='imgURL'
                        placeholder="add an image URL"
                        value={props.form.imgURL}
                        onChange={e => props.setForm({ ...props.form, imgURL: e.target.value })}
                        />
                </div>
                <button className="btn mt-3" style={{backgroundColor: '#4a4b25', color: '#f7f9fb'}} type='submit'>Submit</button>
            </form>
        </div>
    )
}
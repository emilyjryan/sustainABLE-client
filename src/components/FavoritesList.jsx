export default function FavoritesList(props) {
    const favslist = props.favs.favHabits.map((fav => {
        return (
            <div key={fav._id}>
                <div className="card mb-2" style={{width: '18rem', height: '20rem', backgroundColor: '#98ab83'}}>
                    <img className="mx-auto mt-2" style={{width: '17rem', height: '13rem'}} src={fav?.imgURL} alt={fav?.habit}/>
                    <div className="card-body">
                        <h5 className="card-title">{fav?.habit}</h5>
                        {/* <p className="card-text">{fav?.description}</p> */}
                        <a href={`/habits/${fav._id}`} className="btn" style={{backgroundColor: '#4a4b25', color: '#f7f9fb'}}>Details</a>
                    </div>
                </div>
            </div>
        )
    }
    ))
    return (
        <div className='d-flex flex-wrap justify-content-around '>
            {favslist}
        </div>
    )
}
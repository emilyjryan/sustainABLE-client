export default function FavoritesList(props) {
    const favslist = props.favs.favHabits.map((fav => {
        return (
            <div key={fav._id}>
            <div className="card" style={{width: '18rem', height: '24rem'}}>
                <img style={{width: '18rem', height: '15rem'}} src={fav?.imgURL} alt={fav?.habit}/>
            <div className="card-body">
                <h5 className="card-title">{fav?.habit}</h5>
                <p className="card-text">{fav?.description}</p>
                 <a href={`/habits/${fav._id}`} className="btn btn-primary">Details</a>
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
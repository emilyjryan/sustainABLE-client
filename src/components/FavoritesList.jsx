export default function FavoritesList(props) {
    const favslist = props.favs.favHabits.map((fav => {
        return (
            <div key={fav._id}>
                <h3>{fav?.habit}</h3>
                <p>{fav?.description}</p>
                <img src={fav?.imgURL} alt={fav?.habit}/>
                <button>
                    <a href={`/habits/${fav._id}`}>Details</a>
                </button>
            </div>
        )
    }
    ))
    return (
        <div>
            {favslist}
        </div>
    )
}
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	
	 const loggedIn = (
		<>
			{/* if the user is logged in... */}

		<nav className="navbar navbar-expand-lg bg-body-tertiary">
	    <div className="container-fluid">
		<Link className="navbar-brand" to="/">Sustain-able</Link>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
			  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
			</li>
			<li className="nav-item">
			  <Link className="nav-link active" aria-current="page" to="/users/:id">Profile</Link>
			</li>
			<li className="nav-item">
			  <Link className="nav-link active" aria-current="page" to="/habits/new">Create a new Habit</Link>
			</li>
			<li className="nav-item">
			<span onClick={handleLogout}>Logout</span>
			</li>	
		  </ul>
		</div>
	  </div>
	</nav> 
	</>
	 )

	
		
	 const loggedOut = (
		<>
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
	    <div className="container-fluid">
		<Link className="navbar-brand" to="/">Sustain-able</Link>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
			  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
			</li>	
			<li className="nav-item">
			  <Link className="nav-link active" aria-current="page" to="/users/login">Login</Link>
			</li>	
			<li className="nav-item">
			  <Link className="nav-link active" aria-current="page" to="/users/register">Register</Link>
			</li>	
		  </ul>
		</div>
	  </div>
	</nav> 
	</>
	 	)

	return (
		<>
			{currentUser ? loggedIn : loggedOut}
		
		</>
		)
	}





	
	


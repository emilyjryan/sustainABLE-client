import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	
	 const loggedIn = (
		<>
			{/* if the user is logged in... */}

		<nav className="navbar navbar-expand-lg bg-body-tertiary">
	    <div className="container-fluid">
		<a className="navbar-brand" href="/">Sustain-able</a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="/">Home</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="/users/:id">Profile</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="/habits/new">Create a new Habit</a>
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
			{/* if the user is not logged in... */}
			{/* <Link to="/users/register">
				Register
			</Link>{' | '}

			<Link to="/users/login">
				Login
			</Link> */}
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
	    <div className="container-fluid">
		<a className="navbar-brand" href="/">Sustain-able</a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="/">Home</a>
			</li>	
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="/users/login">Login</a>
			</li>	
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="/users/register">Register</a>
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





	
	


import HabitsList from "../HabitsList"

export default function Welcome() {
	return (
		<div style= {{color: "#F7F9FB"}}>
			<div className='card w-75 mx-auto mt-3' style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
				<h1 className="text-center p-4">Welcome to 🌿 Sustain-ABLE!</h1>
				<p className="w-75 mx-auto">
					It's no secret, our world is facing the most rapid period of environmental change in history. Pollution, deforestation, and greenhouse gas emissions are all on the rise due to human activity. We're losing polar icecaps at an alarming rate, oceanic storms are more frequent and stronger than ever before, and global temperature is slowly rising. Humankind's impact on this planet is at the tipping point and if we as a global society don't start making substanial changes towards sustainability, the consequences will be severe for future generations.
					<br/>
					<br/>                
					There is good news though! It's our responsiblity as inhabitants of this beautiful planet to steward its resources and care for the magnificent world we call home. And we are ABLE to change this global warming trajectory. Incorporating even a small daily change toward a more sustainable lifestyle can greatly decrease a person's environmental impact overall.
					<br/>
					<br/>
					Our website provides a space for users to share and discover sustainable habits, from reducing plastic usage to conserving energy. We aim to create a community of individuals who are committed to creating positive change for the environment. Our platform is designed to be user-friendly and accessible, so that anyone can learn about and implement sustainable habits in their daily lives. By fostering a supportive community, we hope to create a ripple effect that will lead to a more sustainable future. 
					<br/>
					<br/>

				</p>
			</div>
			{/* map and list all habit from the habits model */}
			{/* button to create a new habit from NewHabit.jsx */}
			<h3 className="pb-3 mt-3"> Get started with these habit ideas:</h3>
			<HabitsList />
		</div>
	)
}
import HabitsList from "../HabitsList"

export default function Welcome() {
	return (
		<div>
			Home
			{/* map and list all habit from the habits model */}
			{/* button to create a new habit from NewHabit.jsx */}

			<HabitsList />
		</div>
	)
}
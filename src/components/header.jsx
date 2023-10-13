import { Link } from "react-router-dom";

export default function () {
	return (
		<>
			<header>
				<Link to="/">Home</Link>
				<Link to="/profile">Profile</Link>
			</header>
		</>
	)
}
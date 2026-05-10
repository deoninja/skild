import { Show, SignedOut } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";

import { LogIn } from "lucide-react";

const Navbar = () => (
	<nav className="navbar">
		<div className="brand">
			<div className="mark">
				<div className="glyph" />
			</div>
			<Link to="/">
				<span>Skild</span>
			</Link>
		</div>

		<div className="actions">
			<SignedOut>
				<Link to="/sign-in/$" params={{ _splat: "" }} className="btn-primary">
					<LogIn size={16} />
					Sign In
				</Link>
			</SignedOut>
		</div>
	</nav>
);

export default Navbar;

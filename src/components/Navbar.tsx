import { Link } from "@tanstack/react-router";
import {LogIn} from "lucide-react";

const Navbar = () => (
    <nav className="navbar">
        <div className="brand">
            <div className="mark">
                <div className="glyph" />
            </div>
            <Link to='/'>
                <span>Skild</span>
            </Link>
        </div>

        <div className="actions">
            <Link to="/sign-in/$userId" className="btn-primary">
                <LogIn />
                Sign In
            </Link>

        </div>
    </nav>
)

export default Navbar;
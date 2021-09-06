import { Link } from "react-router-dom";

function Header(){
    return (
        <>
            <div>
                <Link to="/">Bosh sahifa </Link>
                <Link to="/about">About </Link>
                <Link to="/404">NoteFound </Link>
            </div>
        </>
    )
}
export default Header;
import { Link } from "react-router-dom";
import img from "../../assets/images/logo3.svg"
function Header(){
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <section className="wrapper">
                        <h1 className="brand">
                            <Link to="/" className="menu-link">
                                <img src={img} className="image_header_logo" />
                            </Link>
                        </h1>
                        <button type="button" className="burger" id="burger">
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </button>
                        <div className="menu" id="menu">
                            <ul className="menu-inner">
                                <li className="menu-item">
                                    <Link to="/" className="menu-link active">Home </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/about" className="menu-link">About </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </nav>
          
        </>
    )
}
export default Header;
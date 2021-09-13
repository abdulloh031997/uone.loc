import { Link,useLocation } from "react-router-dom";
import img from "../../assets/images/01.svg"
import React, { useState } from 'react';
import routes from "../../routes";
function Header(){
    const location = useLocation();
    const [isActive, stateActive] = useState(true);
    const toggleClass = () => {
        stateActive(!isActive);
      };
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
                        <button type="button" className={isActive?' burger' :' burger active'} onClick={toggleClass}  id="burger">
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </button>
                        <div  className={isActive?' menu' :' menu active'} id="menu" style={isActive?{maxHeight:"10px"}:{maxHeight:"200px"}}>
                            <ul className="menu-inner active">
                                {
                                    routes.map((element, index) =>{
                                            return (
                                                <li className="menu-item" key={index} >
                                                    <Link to={element.path} className={element.path===location.pathname?"menu-link active":'menu-link'}>{element.name}</Link>
                                                </li>                                                
                                            )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </div>
            </nav>
          
        </>
    )
}
export default Header;
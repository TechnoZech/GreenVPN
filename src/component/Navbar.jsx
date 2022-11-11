import React from "react";
import {NavLink} from "react-router-dom";

function Navbar(){
    return(

            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand nav_brand" to="/">GreenVPN</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 col-3 mx-auto">
                                
                                <li className="nav-item">
                                <NavLink  className="nav-link" to="/contact">Support</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink  className="nav-link" to="#">Features</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink  className="nav-link" to="#">Pricing</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-success nav-btn" type="button" to="#"> Get Green </button>
                            </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
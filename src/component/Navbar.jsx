import React from "react";
import {NavLink} from "react-router-dom";
import ParkIcon from '@mui/icons-material/Park';
import { Link } from "react-scroll";
function Navbar(){
    return(

            <div className="container-fluid nav_bg fixed-top">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                        
                            <NavLink className="navbar-brand nav_brand" to="/"><ParkIcon className="brand_icon"/> GreenVPN</NavLink>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 col-3 mx-auto">
                                
                                <li className="nav-item">
                                <NavLink  className="nav-link" to="/support">Support</NavLink>
                                </li>

                                <li className="nav-item">
                                    <Link  className="nav-link" to="features" duration={50} smooth={true}>Features</Link>
                                </li>

                                <li className="nav-item">
                                <NavLink  className="nav-link" to="/price">Pricing</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                {/* <button className="btn btn-outline-success nav-btn" type="button" to="https://play.google.com/store/apps/details?id=com.fivetime.greenvpn"> Get Green </button>
                                 */}
                                 <button type="button" className="nav_btn_btn"><a class="btn btn-outline-success nav-btn" href="/price">Get Green</a></button>
                            
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
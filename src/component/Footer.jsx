import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Footer(){
    return(
        <footer className="footer">
            <div className="container">

                <div className="row">
                    <h2>Download the GreenVPN mobile app for iOS or Android.</h2>
                </div>
                <div className="row">
                <div className="home_btns footer_btn">
                    {/* <button type="button" class="btn home_btn1"><SendIcon className="btn_icon"/> Download</button>
                    <button type="button" class="btn home_btn2"><AppleIcon className="btn_icon"/> Download</button> */}

                    <a href="https://play.google.com/store/apps/details?id=com.fivetime.greenvpn" target="_blank">
                                    <button className="btn home_btn1" type="button">
                                    <SendIcon className="btn_icon"/> Download
                                    </button>
                    </a>

                    <a href="https://apps.apple.com/app/id1542123105" target="_blank">
                                    <button className="btn home_btn2" type="button">
                                    <AppleIcon className="btn_icon"/> Download
                                    </button>
                    </a>
                </div>
                </div>
               
                <div className="row">

                    <div className="col-3">
                        <ul className="footer_links">
                            <li className="footer_link_heading">COMPANY</li>
                            <li>GreenVPN is one of the top leading globle VPN. With 10,000+ satisfied users. It provides various types of additional services like virus protection, unlimited device connections.</li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <ul className="footer_links">
                            <li className="footer_link_heading">LEGAL</li>
                            <li className="footer_li"><NavLink to="/privacy"><a >Privacy Policy</a></NavLink></li>
                            <li className="footer_li"><NavLink to="/terms"><a >Terms & Conditions</a></NavLink></li>
                            <li className="footer_li"><NavLink to="/terms"><a >Report Abuse</a></NavLink></li>
                            
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="footer_links">
                            <li className="footer_link_heading">HELP</li>
                            <li className="footer_li"><NavLink to="/support"><a>Support Center</a></NavLink></li>
                            <li className="footer_li"><Link  to="faq" duration={50} smooth={true}>FAQ</Link></li>
                            <li className="footer_li"><NavLink to="/support"><a>Contact Us</a></NavLink></li>
                            <li className="footer_li"><Link  to="testimonials" duration={50} smooth={true}>Testimonials</Link></li>
                        </ul>
                    </div>
                        <div className="col-3">
                            <ul className="footer_links">
                                <li className="footer_link_heading">FOLLOW US</li>
                        
                                <li>
                                    <a href="https://github.com/TechnoZech" target="_blank">
                                    <button className="footer_social" ><FacebookIcon className="footer_social_icon"/>
                                     Facebook
                                    </button>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="https://github.com/TechnoZech" target="_blank">
                                    <button className="footer_social" ><InstagramIcon className="footer_social_icon"/>
                                     Instagram
                                    </button>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/TechnoZech" target="_blank">
                                    <button className="footer_social" ><YouTubeIcon className="footer_social_icon"/>
                                     YouTube
                                    </button>
                                    </a>
                                </li>
                                
                                
                        
                            </ul>
                            
                    </div>
                </div>


                <div className="row footer_rights">
                    <p className="footer_rights_p">© 2022 GreenVPN. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
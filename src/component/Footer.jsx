import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(){
    return(
        <footer className="footer">
            <div className="container">

                <div className="row">
                    <h2>Download the GreenVPN mobile app for iOS or Android.</h2>
                </div>
                <div className="row">
                <div className="home_btns footer_btn">
                    <button type="button" class="btn home_btn1"><SendIcon className="btn_icon"/> Download</button>
                    <button type="button" class="btn home_btn2"><AppleIcon className="btn_icon"/> Download</button>
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
                            <li className="footer_li"><a href="#">Privacy Policy</a></li>
                            <li className="footer_li"><a href="#">Terms & Conditions</a></li>
                            <li className="footer_li"><a href="#">Report Abuse</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="footer_links">
                            <li className="footer_link_heading">HELP</li>
                            <li className="footer_li"><a href="#">Support Center</a></li>
                            <li className="footer_li"><a href="#">FAQ</a></li>
                            <li className="footer_li"><a href="#">Contact Us</a></li>
                            <li className="footer_li"><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                        <div className="col-3">
                            <ul className="footer_links">
                                <li className="footer_link_heading">FOLLOW US</li>
                                <li><button href="#" className="footer_social"><FacebookIcon/> Facebook</button></li>
                                <li><button href="#" className="footer_social"><InstagramIcon/> Instagram</button></li>
                                <li><button href="#" className="footer_social"><YouTubeIcon/> Youtube</button></li>
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
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import AppleIcon from '@mui/icons-material/Apple';

import Navbar from "./Navbar";
import Features from "./Features.jsx";
import Features2 from "./Features2.jsx";
import Deal from "./Deal.jsx";
import Testimonials from "./Testimonials.jsx";
import Faq from "./Faq.jsx";
import Footer from "./Footer.jsx";

function Home(){
    return(
        <div>
        <Navbar />
        <section className="section_home">
        
        <div className="container home">
            <div className="row">
                    <div className="col-6">
                        <h1 className="home_txt">Get peace of mind <br/> knowing that your <br/>
                            <strong>Data is Secured.</strong>
                        </h1>

                        <div className="home_btns">
                    
                            <button type="button" class="btn home_btn1"><SendIcon className="btn_icon"/> Download</button>
                            <button type="button" class="btn home_btn2"><AppleIcon className="btn_icon"/> Download</button>
                        </div>
                    </div>
                    
                    <div className="col-6">
                        <img  className="home_img" src={require("../images/vpnmobile.png")} alt="vpn mobile" />
                    </div>

                </div>

            </div>
            
        </section>
            <Features />
            <Features2 />
            <Deal />
            <Testimonials />
            <Faq />
            <Footer />
        </div>
    ); 
}

export default Home;
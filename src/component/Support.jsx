import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Footer from "./Footer";
import Navbar from "./Navbar";

function Support(){
    return(
        <div>
        <Navbar />
            <div className="container">
                <div className="row support_row">
                    <div className="col-6">
                        <SupportAgentIcon className="SupportAgentIcon"/>
                    </div>
                    <div className="col-6">
                        <form>
                            <h1 className="support_h1"> Get in touch</h1>
                            <input type="text" placeholder="Name" className="support_input"/><br />
                            <input type="email" placeholder="Email" className="support_input"/> <br />
                            <input type="text" placeholder="Subject" className="support_input"/><br />
                            <textarea placeholder="Message" className="support_input support_message"></textarea> <br />
                            <button className="support_btn">Send Email ✉</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Support;
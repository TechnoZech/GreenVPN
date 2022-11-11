import React from "react";

function Home(){
    return(
        <section className="section_home">
        <div className="container home">
            <div className="row">
                    <div className="col-6">
                        <h1 className="home_txt">Get peace of mind <br/> knowing that your <br/>
                            <strong>Data is Secured.</strong>
                        </h1>

                        <div className="home_btns">
                            <button type="button" class="btn home_btn1">Download</button>
                            <button type="button" class="btn home_btn2">Download</button>
                        </div>
                    </div>
                    
                    <div className="col-6">
                        <img  className="home_img" src={require("../images/vpnmobile.png")} alt="vpn mobile" />
                    </div>

                </div>

            </div>
        </section>
    ); 
}

export default Home;
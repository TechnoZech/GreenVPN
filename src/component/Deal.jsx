import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import Timer from "../component/Timer";

function Deal(){
    return(
        <section>
            <div className="container">
                <div className="row deal">
                    <div className="col-6">
                        <h1 className="deal_h1">Black Friday deal: <br/> 83% off</h1>
                        <h2 className="deal_h2">+3 months free</h2>
                        <div className="deal_list">
                            <h4><CheckIcon /> Just one click to a safer internet</h4>
                            <h4><CheckIcon /> Secure access, worldwide</h4>
                            <h4><CheckIcon /> Lightning-quick connectivity</h4>
                        </div>
                        <button type="button" class="btn deal_btn">Grab the Deal</button>
                        <Timer />
                    </div>
                    <div className="col-6">
                        <div>
                            <img  className="deal_83_gif" src={require("../images/83.gif")} alt="83%" />
                        </div>
                        <div>
                            <img  className="deal_off_gif" src={require("../images/off.gif")} alt="off" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Deal;
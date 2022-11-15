import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import Timer from "../component/Timer";

function Deal(){
    return(
        <section>
            <div className="container">
                <div className="row deal">
                    <div className="col-6 deal_left">
                        <h1 className="deal_h1">Black Friday deal: <br/> 83% off</h1>
                        <h2 className="deal_h2">+3 months free</h2>
                        <div className="deal_list">
                            <h4><CheckIcon /> Just one click to a safer internet</h4>
                            <h4><CheckIcon /> Secure access, worldwide</h4>
                            <h4><CheckIcon /> Lightning-quick connectivity</h4>
                        </div>
                        <button type="button" class="btn deal_btn">Grab the Deal</button>
                        <button type="button" class="btn deal_btn_timer"><Timer /></button>
                    </div>
                    <div className="col-6">
                        <div className="deal_animation">
                            <ul>
                                <li>
                                    8
                                </li>
                                <li>
                                    3
                                </li>
                                <li>
                                    %
                                </li>
                            </ul>
                        </div>
                        <div className="deal_animation off">
                            <ul>
                                <li>
                                    o
                                </li>
                                <li>
                                    f
                                </li>
                                <li>
                                    f
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Deal;
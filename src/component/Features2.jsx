import React from "react";
import RouterIcon from '@mui/icons-material/Router';
import SpeedIcon from '@mui/icons-material/Speed';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Features2(){
    return(
        <section className="features_2">
            <div className="container ">
                <div className="row">

                    <div className="row">

                        <div className="col-6">
                            <RouterIcon className="features_2_icons_1"/>
                            <h1 className="features_2_heading">Unlimited Bandwidth</h1>
                        </div>

                        <div className="col-6">
                            <SpeedIcon className="features_2_icons"/>
                            <h1 className="features_2_heading_3">High Speed</h1>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-6">
                            <ImportantDevicesIcon className="features_2_icons_1"/>
                            <h1 className="features_2_heading">Unlimited Devices</h1>
                        </div>

                        <div className="col-6">
                            <LockOpenIcon className="features_2_icons"/>
                            <h1 className="features_2_heading_2"> Unblock Content</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features2;
import React from "react";
import SecurityIcon from '@mui/icons-material/Security';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Features(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="features_heading">Why Green VPN</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-4 feature_cards">
                    <div>
                        <SecurityIcon className="feature_icons"/>
                    </div>

                    <div>
                        <h2 className="features_h2">Security</h2>
                    </div>

                    <div>
                        <p className="features_p">Our secure VPN sends your internet traffic through an encrypted VPN tunnel, so your passwords and confidential data stay safe, even over public or untrusted Internet connections.</p>
                    </div>
                </div>
                <div className="col-4 feature_cards">
                    <div>
                        <PhonelinkLockIcon className="feature_icons"/>
                    </div>

                    <div>
                        <h2 className="features_h2">Privacy</h2>
                    </div>
                    
                    <div>
                        <p className="features_p">Keep your browsing history private. As a Swiss VPN provider, we do not log user activity or share data with third parties. Our anonymous VPN service enables Internet without surveillance.</p>
                    </div>
                </div>
                <div className="col-4 feature_cards">
                <div>
                        <AccessibilityNewIcon className="feature_icons"/>
                    </div>

                    <div>
                        <h2 className="features_h2">Freedom</h2>
                    </div>
                    
                    <div>
                        <p className="features_p">We created Proton VPN to protect the journalists and activists who use Proton Mail. Proton VPN breaks down the barriers of Internet censorship, allowing you to access any website or content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
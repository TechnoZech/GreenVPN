import React from "react";

function Faq(){
    return(
        <section>
            <div className="container" id="faq">
                <div className="row">
                    <div>
                        <h1 className="faq_title">Frequently asked questions</h1>
                    </div>

                    <div className="faq_accordion">

                        <div class="accordion" id="accordionExample">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is GreenVPN?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        GreenVPN is a VPN service and the flagship product of the cybersecurity company Green Security. We value people’s freedom of choice beyond anything else, so we strive to offer access to free and safe internet for our users. Through hard work, dedication, and technological innovation we’ve created the fastest VPN in the world with state-of-the-art features.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Is it safe to use a VPN?
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Using reputable VPN services is completely safe. If you pay for a reliable provider like GreenVPN, you get a safe, easy-to-use, high-quality product. Using free VPNs, however, could be dangerous. When you’re not paying for a service, the provider has to make money somehow. So they shower you with ads, track and sell your data, or even use your device’s computing power.
                                </div>
                                </div>
                            </div>


                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is online privacy worth the cost?
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes. By protecting your privacy online, you are defending sensitive information about yourself, like your communications, virtual location, IP address, and more. The cost for your privacy is worth it when you balance it against the risks we face online every day.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
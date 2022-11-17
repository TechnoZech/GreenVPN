import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Price(){
    return( 
        <div>
        <Navbar/>
            <section class="pricing py-5 mt-5">
                <div class="container">
                    <div class="row">
                      {/* <!-- Free Tier --> */}
                    <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0 price_card">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                            <hr />
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>100+ servers in 3 countries (US, NL, JP)</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Medium VPN speed</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>1 VPN connection</li>
                            <li><span class="fa-li"><i class="fas fa-times"></i></span>Strict no-logs policy</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>NetShield malware and ad-blocker</li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Secure Core servers
                            </li>
                            <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>24/7 support
                            </li>
                            </ul>
                            <div class="d-grid">
                            <a href="#" class="btn text-uppercase price_btn">Get VPN Free</a>
                            </div>
                        </div>
                        </div>
                    </div>


                    {/* <!-- Plus Tier --> */}


                    <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0 price_card">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">2 Year plan</h5>
                            <h6 class="card-price text-center">$5<span class="period">/month</span></h6>
                            <hr />
                            <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>1700+ servers in 60+ countries</strong></li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Highest VPN speed</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>10 VPN connections</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Strict no-logs policy</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>NetShield malware and ad-blocker </li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Secure Core servers</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>24/7 support</li>
                            </ul>
                            <div class="d-grid">
                            <a href="#" class="btn text-uppercase price_btn">Get 2 Year Deal</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Pro Tier --> */}

                    <div class="col-lg-4">
                        <div class="card price_card">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">Monthly Plan</h5>
                            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                            <hr />
                            <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>1700+ servers in 60+ countries</strong></li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Highest VPN speed</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>10 VPN connections</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Strict no-logs policy</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>NetShield malware and ad-blocker </li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>Secure Core servers</li>
                            <li><span class="fa-li"><i class="fas fa-check"></i></span>24/7 support</li>
                            </ul>
                            <div class="d-grid">
                            <a href="#" class="btn text-uppercase price_btn">Get Standard</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Price;
import React from "react";
import {TwitterTweetEmbed} from 'react-twitter-embed';

function Testimonials(){
    return(
        <section className="Testimonials">
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <h1>But don’t just take our word for it</h1>
                        <p>Find out what other people have to say about GreenVPN.</p>
                    </div>
                </div>
                
                <div className="row tweets">

                    <div className="col-4">
                        <TwitterTweetEmbed tweetId={'1485615200459968518'} />
                        
                    </div>
                    <div className="col-4">
                        <TwitterTweetEmbed tweetId={'1485615200459968518'} />
                    </div>
                    <div className="col-4">
                        <TwitterTweetEmbed tweetId={'1485615200459968518'} />
                    </div>

                </div>


            </div>
            
        </section>
    );
}

export default Testimonials;
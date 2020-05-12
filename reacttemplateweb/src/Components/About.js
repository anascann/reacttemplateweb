import React from "react";
import "../App.css";

function About(){
    return(
        <div>
        <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
      
            <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
        
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
           
            <div class="row">
                <div class="col-lg-4 ml-auto"><p class="lead">You can contact me for this template and you can use it for your portfolios to showcase your designs</p></div>
                <div class="col-lg-4 mr-auto"><p class="lead">Shwoing online portfolios can help in the Formal interviews and showcasing your stuff to the clients</p></div>
            </div>
          
        </div>
    </section>
        </div>
    )

}

export default About;
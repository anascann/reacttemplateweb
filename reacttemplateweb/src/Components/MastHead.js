import React from 'react';
import "../App.css";
import im from "./assets/img/avataaars.svg"

function MastHead(){
    return(
        <div>
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src={im} alt="" />
                <h1 class="masthead-heading text-uppercase mb-0">We are the Resistance</h1>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
               
                <p class="masthead-subheading font-weight-light mb-0">This is extensively Built on React Library</p>
            </div>
        </header>
        </div>
    )
}

export default MastHead;
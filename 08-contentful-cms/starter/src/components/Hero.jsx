import React from "react";
import heroImg from "../assets/hero.svg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a
                        ipsam incidunt deserunt consequatur rerum quis minima numquam
                        quisquam magnam! Ad ratione corrupti eius vel consectetur aperiam
                        neque doloribus voluptatibus.q
                    </p>
                </div>

                <div className="img-container">
                    <img src={heroImg} alt="woman and a browser" className="img" />
                </div>
            </div>
        </section>
    );
}

export default Hero;

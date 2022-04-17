import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'
import img from '../../image/personal.jpg'

const About = () => {
    return (
        <div>
            <div className="container w-100">
                <div className="banner d-flex justify-content-center row">
                    <div className="banner-left col-sm-12 col-md-8 col-lg-8">
                        <div>
                            <h1 className="banner-title">BULBUL RASEL</h1>
                            <p className="banner-text ">Thi is me,Bulbul Ahammed Rasel. I'm experienced at  Web development.
                                And  Expert with HTML5, CSS3, javaScript, ReactJs, Firebase, Nodejs. I have
                                completed so many Different project
                                as a Web  Developer. I enjoy to doing something new and that is my personal satisfaction. <br />
                                Next 5 years, I want to be a leading web developer all over the countries. For reason I willing to crossover any kind of barrier. I want to built my carrier with a professional web developer. <br />
                                Thanks you for being with BULBUL RASEL...</p>
                            <Button className="btn">Click Here</Button>
                        </div>
                    </div>
                    <div className="banner-right col-sm-12 col-md-4 col-lg-4 center-block d-block mx-auto">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
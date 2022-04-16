import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'
import img from '../../image/personal.jpg'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="banner d-flex row">
                    <div className="banner-left col-sm-18 col-md-8 col-lg-8 ">
                        <div>
                            <h1 className="banner-title">BULBUL RASEL</h1>
                            <p className="banner-text">Hey i'm Bulbul Rasel. I'm experienced at Professional Web and Graphic
                                Designer.
                                I'm Expert with Adobe Suite in Logo, Business Card, Flyer, Illustration, Stationary, Magazine
                                design and others areas. In Web Design I'm expart wordpress, HTML5, CSS3,ReactJs, Nodejs. I have
                                completed so many project
                                and works Differents companies as a Web and Graphic Designer. I enjoy collaborating with my
                                client and try to fullfill their requirment as an professional Graphic Designer and Web Designer
                                I try to fulfill their expectation. I really enjoyed If i can help youwith my unique design to
                                achiving your target. Thanks you for being with BULBUL RASEL...</p>
                            <Button className="btn">Click Here</Button>
                        </div>
                    </div>
                    <div className="banner-right col-sm-12 col-md-12 col-lg-4">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
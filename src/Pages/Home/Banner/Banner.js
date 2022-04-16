import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bimg1 from '../../../image/banner/img1.jpg'
import bimg2 from '../../../image/banner/img5.jpg'
import bimg3 from '../../../image/banner/img3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={bimg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Root Cannel</h3>
                    <p>For Survive with tooth, Root Cannel is very important</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={bimg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Filling</h3>
                    <p>For Damage tooth, Filling tooth is very important</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={bimg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Cleaning</h3>
                    <p>
                        For healthy Mouth, Cleaning is very important
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
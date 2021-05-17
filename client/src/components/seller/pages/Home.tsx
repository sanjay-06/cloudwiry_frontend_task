import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
       <Navbar />
       <div className="carousel">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://wallpapercave.com/wp/VSweCuw.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Our Moto</h3>
                <p>Go green! Come sell bonsai plants with us!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.wallpaperup.com/uploads/wallpapers/2013/03/30/67866/cafc822aafd133513a51c25ae26b9c1d.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Speciality</h3>
                <p>Only 2% commission from your sale</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://images2.alphacoders.com/194/thumb-1920-194940.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Community</h3>
                <p>1 lakh+ happy customers</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       </div>
    </>
  );
}

export default Home;
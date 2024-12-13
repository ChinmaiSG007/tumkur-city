import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageCarousel: React.FC = () => {
  const placeholderImages = [
    "https://via.placeholder.com/800x400.png?text=Slide+1",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];

  return (
    <div className=" d-flex">
      <Carousel
        interval={3000}
        controls={true}
        indicators={true}
        pause="hover"
        className="carousel-custom"
      >
        {placeholderImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>Slide {index + 1}</h3>
              <p>Placeholder image for Slide {index + 1}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

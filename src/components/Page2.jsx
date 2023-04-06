import React from "react";
import kota1 from "../assets/kota1.jpg";
import kota2 from "../assets/kota2.jpg";
import kota3 from "../assets/kota3.jpg";
import Carousel from "react-bootstrap/Carousel";
export default function Page2() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kota1}
          alt="First slide"
          style={{ width: 800, height: 400 }}
        />
        <Carousel.Caption>
          <h3>KOTA LAMA</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kota2}
          alt="Second slide"
          style={{ width: 800, height: 400 }}
        />

        <Carousel.Caption>
          <h3>SEJARAH</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kota3}
          alt="Third slide"
          style={{ width: 800, height: 400 }}
        />

        <Carousel.Caption>
          <h3>WISATA</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

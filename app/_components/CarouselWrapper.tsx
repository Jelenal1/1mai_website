"use client";
import React, { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselWrapper({
  images,
}: {
  images: ReactElement[];
}) {
  return (
    <Carousel className="max-w-[800px]" showArrows={true}>
      {images.map((image, key) => (
        <div key={key}>{image}</div>
      ))}
    </Carousel>
  );
}

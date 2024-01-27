"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselWrapper({ images }: { images: string[] }) {
  return (
    <>
      <Carousel
        showArrows={true}
        className="z-0 flex max-w-[800px] items-center"
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        {images.map((url, index) => (
          <div key={index} className="h-fit">
            <img src={url} alt="Apartment" className="z-0 object-contain" />
          </div>
        ))}
      </Carousel>
    </>
  );
}

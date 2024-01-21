"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselImages({ images }: { images: string[] }) {
  return (
    <>
      <Carousel
        showArrows={true}
        className="z-0 max-w-[800px]"
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        {images.map((url, index) => (
          <div key={index}>
            <Image
              src={url}
              width={500}
              height={500}
              alt="Apartment"
              className="z-0 mx-auto"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

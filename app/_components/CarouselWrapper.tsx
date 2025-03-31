"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { twMerge } from "tailwind-merge";

export default function CarouselWrapper({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  return (
    <>
      <Carousel
        showArrows={true}
        className={twMerge("flex max-w-[1000px] items-center", className)}
        autoPlay
        infiniteLoop
        axis="horizontal"
        showThumbs={false}
      >
        {images.map((url, index) => (
          <div key={index} className="h-fit">
            <img
              src={url}
              alt="Apartment"
              className="z-0 max-h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

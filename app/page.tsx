import { Suspense } from "react";
import CarouselWrapper from "./_components/CarouselWrapper";

export default function Home() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <h1 className="my-2 text-2xl font-bold lg:text-3xl">
        1 Mai Winterthur 2025
      </h1>

      <p className="my-10 text-center">
        Hier folgen Infos und Updates zum 1.Mai
      </p>
      <h3 className="text-xl font-bold">Bilder des letzten 1. Mai 2024</h3>
      <Suspense>
        <div className="h-fit">
          <CarouselWrapper
            images={[
              "/1Mai_demo_2024_1.jpg",
              "/1Mai_demo_2024_2.jpg",
              "/1Mai_demo_2024_3.jpg",
              "/1Mai_demo_2024_4.jpg",
              "/1Mai_demo_2024_5.jpg",
            ]}
          />
        </div>
      </Suspense>
    </main>
  );
}

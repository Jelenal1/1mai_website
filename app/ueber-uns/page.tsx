import CarouselWrapper from "../_components/CarouselWrapper";
import Link from "next/link";
export default function UeberUns() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="mt-5">
        <CarouselWrapper
          images={[
            "/cropped-IMG_5451.jpg",
            "/Wadlschenke_innen.jpg",
            "/waldschenke_aussen.jpg",
            "/Waldschenke-4.jpg",
          ]}
        />
      </div>

      <h2 className="mt-3 text-xl font-bold lg:text-2xl">
        Die Arbeiterunion Winterthur
      </h2>
      <p className="mt-5 w-full max-w-[800px] text-justify">
        Die Arbeiterunion Winterthur ist ein Zusammenschluss von Organisationen
        aus dem rot-grünen Spektrum. Ursprünglich gegründet 1871 als
        Koordinatonsgremium der Arbeiterbewegung, organisiert sie seit 1890
        jeweils die 1. Mai Feier.
      </p>
      <p className="mt-5 w-full max-w-[800px] text-justify">
        Neben der 1.Mai Feier ist die Arbeiterunion Besitzerin der{" "}
        <Link
          href="https://www.waldschenke-winterthur.ch/"
          className="underline hover:text-blue-600"
        >
          Waldschenke
        </Link>
      </p>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
export default function page() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex max-w-[800px] flex-col items-center gap-2">
        <h2 className="my-2 text-xl font-bold">
          Unsere Forderungen zum 1. Mai 2020
        </h2>
        <p className="mb-2">
          Sende auch Du uns Deine Aussage, oder eine Videobotschaft{" "}
          <Link
            href={"/mitmachen"}
            className="text-blue-600 underline hover:text-purple-600"
          >
            hier
          </Link>{" "}
          - oder über auch über{" "}
          <Link
            href={
              "https://www.facebook.com/people/1-Mai-Winterthur/100064510579558/"
            }
            className="text-blue-600 underline hover:text-purple-600"
          >
            Facebook
          </Link>
        </p>
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: -37,
              width: "100%",
              height: "100%",
            }}
            src="https://www.youtube-nocookie.com/embed/hO0ujtFgEps?si=jONkV2wAvimBkmkA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-9"
          ></iframe>
        </div>
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/413946055?h=62b3acba72"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Image
        src={"/1mai_testimonials/PP_Dennler.jpg"}
        width={800}
        height={1000}
        alt="PP"
      />
      <Image
        src={"/1mai_testimonials/120501_1mai_Testimonials_093.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120501_1mai_Testimonials_092.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <div
        style={{
          position: "relative",
          paddingTop: "56.25%",
          maxWidth: "800px",
          width: "100%",
          minWidth: "400px",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minWidth: "400px",
          }}
          src="https://player.vimeo.com/video/413911048?h=2535b45640"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Image
        src={"/1mai_testimonials/120501_1mai_Testimonials_084.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
    </main>
  );
}

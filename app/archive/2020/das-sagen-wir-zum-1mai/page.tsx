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
      <Image
        src={"/1mai_testimonials/120501_1mai_Testimonials_082.png"}
        alt="1 Mai Testimonial"
        width={800}
        height={1000}
      />
      <Image
        src={"/1mai_testimonials/120501_1mai_Testimonials_08.png"}
        alt="1 Mai Testimonial"
        width={800}
        height={1000}
      />
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_08.png"}
        alt="1 Mai Testimonial"
        width={800}
        height={1000}
      />
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_082.png"}
        alt="1 Mai Testimonial"
        width={800}
        height={1000}
      />
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_083.png"}
        alt="1 Mai Testimonial"
        width={800}
        height={1000}
      />
      <Link
        href={"/archive/2020/das-sagen-wir-zum-1mai/fluechtlingssolidaritaet"}
      >
        <Image
          src={"/1mai_testimonials/aid-hoc-logo.png"}
          alt="1 Mai Testimonial"
          width={400}
          height={400}
          className="my-2"
        />
      </Link>
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_063.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_062.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_064.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_054.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_055.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_057.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_058.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_042.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_043.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_046.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_047.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_048.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0410.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0411-1.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_05_Bopp_korr.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_05_keller.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_05_Stampfli.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_049.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0413.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0414.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Siegmann_def18.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0417.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_045.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_04.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0412.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0415.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120427_1mai_Testi_Serie_053.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120426_1mai_Testimonials_Serie_0419.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_casutt_sarah.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_fink_juna.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_erismann.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Johansson.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Wenger_02.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_019.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_017.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_01.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_015.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_012.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_016.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_0111.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_013.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_0112.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />{" "}
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_0110.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_018.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120418_1mai_Testi_Neukom_korr.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/120430_1mai_Testimonials_06.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_0114.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
      <Image
        src={"/1mai_testimonials/1204119_mai_Testi_Serie_0116.png"}
        width={800}
        height={1000}
        alt="1 Mai Testimonial"
      />
    </main>
  );
}

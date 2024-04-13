import Image from "next/image";
import CarouselWrapper from "./_components/CarouselWrapper";

export default function Home() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <h1 className="my-2 text-2xl font-bold lg:text-3xl">
        1 Mai Winterthur 2024
      </h1>
      <Image
        src="/1Mai_Banner_24.png"
        width={800}
        height={800}
        alt="Winti den Menschen nicht dem Profit Banner"
      />
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">Programm</h2>
      <p className="w-full max-w-[800px] text-justify">
        10.30 Uhr Steinberggasse für Demo anschliessend Reden, Musik und
        Festwirtschaft auf dem Neumarkt
      </p>
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">Reden</h2>
      <p className="w-full max-w-[800px] text-justify">
        Becca N. (Feministisches Kollektiv)
        <br /> VPOD, UNIA
        <br /> Valeria Muster (JUSO)
        <br /> Anna Rosenwasser (SP)
      </p>
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">Musik</h2>
      <p className="w-full max-w-[800px] text-justify">
        15:00 Peter Pana <br />
        16:00 Filterbank
      </p>
      <h2 className="mt-3 text-2xl font-bold lg:text-2xl">Winti den Menschen nicht dem Profit</h2>
      <p className="w-full max-w-[800px] text-justify">
        Bezahlbarer Wohnraum ist ein Grundrecht. Im Sommer 2023 standen in
        Winterthur gerade mal 112 Wohnungen frei. Die Mieten steigen, während
        die Löhne der Teuerung nicht angepasst werden. Zusammen mit den
        Nebenkosten und den Krankenkassenprämien wird die monatliche Miete zu
        einer enormen Belastung. Steigende Mieten und tiefere Löhne erfordern
        Verzicht, beispielsweise auf eine ausgewogene Ernährung oder
        Gesundheitsleistungen. Dieser Verzicht wirkt sich direkt negativ auf die
        körperliche und geistige Gesundheit aus und kann schlimmstenfalls in die
        Armut führen. Währenddessen reissen Immobilienfirmen fleissig ab, bauen
        und sanieren. Teure Wohnungen ersetzen die günstigen und bisherige
        Bewohner*innen werden verdrängt.
      </p>
      <p className="mt-3 w-full max-w-[800px] text-justify">
        Das darf nicht sein! Mit der Initiative “Wohnen für Alle” fordert die
        SP, dass bis im Jahre 2040 mindestens ein Viertel aller Wohnungen in
        Winterthur dem gewinnorientierten Wohnungsmarkt entzogen und
        gemeinnützig verwaltet werden. Aktuell sind es nur 13%. Auf der anderen
        Seite stehen Versicherungen, Banken und Pensionskassen, die über ein
        Drittel der Mietwohnungen besitzen und damit massiv Profit auf unsere
        Kosten erwirtschaften. Der Gegenvorschlag des Stadtrates sieht nur 30
        zusätzliche gemeinnützige Wohnungen pro Jahr vor. Wir fordern ein klares
        und ambitioniertes Ziel, um der Wohnungsnot aktiv entgegenzuwirken.
      </p>
      <p className="mt-3 w-full max-w-[800px] text-justify">
        Konkret heisst das für die Stadt Winterthur:
        <ul className="ml-4 list-disc">
          <li>
            gemeinnützigen und klimaverträglichen Wohnungsbau selbst in die Hand
            nehmen anstatt Privaten überlassen
          </li>
          <li>
            einen Mindestanteil an preisgünstigen Wohnungen bei Mehrausnützungen
            sichern
          </li>
          <li>ein Vorkaufsrecht für Gemeinden bei Wohnliegenschaften</li>
          <li>mehr gemeinschaftliche, unkommerzielle Freiräume</li>
        </ul>
      </p>
      <p className="my-3 w-full max-w-[800px] text-justify">
        Die Wohnungsnot ist eng mit der ökologischen, sozialen und ökonomischen
        Krise verknüpft. Darum steht das 1. Mai Komitee gemeinsam für ein Winti
        ein , das den Menschen und nicht dem Profit gehört. Denn: Ein
        vielfältiges, durchmischtes Winterthur bedeutet eine lebenswerte Stadt
        für uns alle!
      </p>
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">
        Bilder des letzten 1. Mai
      </h2>
      <CarouselWrapper
        images={[
          "/DSC_0637.jpeg",
          "/DSC_0644.jpeg",
          "/DSC_0665.jpeg",
          "/DSC_0670.jpeg",
          "/DSC_0672.jpeg",
        ]}
      />
    </main>
  );
}

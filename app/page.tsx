import Image from "next/image";
import CarouselWrapper from "./_components/CarouselWrapper";

export default function Home() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <h1 className="my-2 text-2xl font-bold lg:text-3xl">
        1 Mai Winterthur 2023
      </h1>
      <Image
        src="/alles_fuer_alle_banner.png"
        width={800}
        height={800}
        alt="alles-fuer-alle"
      />
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">Programm</h2>
      <p className="w-full max-w-[800px] text-justify">
        10.30 Uhr Steinberggasse für Demo anschliessend Reden, Musik und
        Festwirtschaft auf dem Neumarkt
      </p>
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">Reden</h2>
      <p className="w-full max-w-[800px] text-justify">
        Eidgenössische Kommission dini Mueter Mandy Abou Shoak Gastrakollektiv
        Saeed Farkhondeh
      </p>
      <h2 className="mt-3 text-xl font-bold lg:text-2xl">Musik</h2>
      <p className="w-full max-w-[800px] text-justify">
        Olekanone, IroNina ReVulva <br /> und muRmure (RAP) <br /> Mezu (BALKAN)
      </p>
      <h2 className="mt-3 text-2xl font-bold lg:text-2xl">Alles für Alle</h2>
      <p className="w-full max-w-[800px] text-justify">
        Die letzten Jahre haben gezeigt, dass Krieg und Krisen die Gesellschaft
        spalten und Ungerechtigkeiten weiter verstärken. Immer mehr Menschen
        können trotz Vollzeitjob kaum Miete und Krankenkasse zahlen. Betroffen
        sind davon hauptsächlich Frauen, die wegen unbezahlter Sorgearbeit und
        Arbeit in Tieflohnjobs stärker armutsgefährdet sind. Mit der Erhöhung
        des Rentenalters hat sich diese Situation weiter verschlechtert.
      </p>
      <p className="mt-3 w-full max-w-[800px] text-justify">
        In Europa tobt seit über einem Jahr ein brutaler Krieg, die daraus
        entstehende Energiekrise soll mit neuen Gaskraftwerken und
        individualisierenden Energiesparmassnahmen bekämpft werden. Da scheinen
        Lösungen für die Klimakrise weit entfernt. Obendrauf investiert der Bund
        Milliarden in die Rettung einer korrupten, klimazerstörerischen Bank.
        Die Bevölkerung trägt dabei das ganze Risiko, die Banken die Profite.
      </p>
      <p className="mt-3 w-full max-w-[800px] text-justify">
        Wir fordern deswegen an diesem 1. Mai «Alles für alle»! Wir wollen faire
        Löhne, bezahlbare Wohnungen, ein Gesundheitssystem, das für alle
        zugänglich ist, Teilhabe am sozialen, kulturellen und politischen Leben,
        sowie eine Wirtschaft, die nicht auf der Ausbeutung von Mensch und
        Umwelt beruht.
      </p>
      <p className="mt-3 w-full max-w-[800px] text-justify">
        «ALLES FÜR ALLE» HEISST SOLIDARITÄT ZU LEBEN! Wir wollen ein System, das
        nicht von der Wirtschaft und dem Profit diktiert ist, sondern der
        gesamten Gesellschaft dient und allen Lebewesen Sorge trägt.
      </p>
      <p className="mt-3 w-full max-w-[800px] text-justify">
        BEGINNEN WIR JETZT IN WINTERTHUR - mit Massnahmen für Netto Null bis
        spätestens 2040, einem kommunalen Mindestlohn, mehr öffentlichem Verkehr
        statt Autos und mehr kostengünstigem, genossenschaftlichem Wohnen!
      </p>
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

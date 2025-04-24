import Image from "next/image";
import { Suspense } from "react";
import CarouselWrapper from "./_components/CarouselWrapper";

export default function Home() {
  return (
    <main className="mb-10 flex flex-col items-center">
      <Image
        src="/2025/1MaiWinti25_Website-Header.png"
        alt="1 Mai Winterthur Logo, Umverteilen & Neues gestalten, Winti für alle!"
        width={1080}
        height={113}
        loading="lazy"
        className="h-auto w-full max-w-[1000px]"
      />
      <div className="mx-1">
        <h1 className="my-2 mt-5 text-2xl font-bold lg:text-3xl">
          1 Mai Winterthur 2025
        </h1>
        <p className="mb-5 w-full max-w-[1000px] text-xl font-bold">
          Winterthur muss eine Stadt sein, die lebt, verbindet und für alle da
          ist – egal wie viel du verdienst, woher du kommst oder welchen
          Abschluss du hast: eine Stadt mit Platz zum Wohnen, der bezahlbar ist,
          mit Bildung für alle, grünen Oasen gegen die Hitze und mit Quartieren,
          die pulsieren und vernetzen. Am 1. Mai tragen wir diese Vision auf die
          Strasse – gemeinsam, laut und bunt!
        </p>
        <p className="mb-5 w-full max-w-[1000px]">
          «Winti für alle!» heisst ein lebenswertes Winterthur zu schaffen; eine
          Stadt, die allen etwas zu bieten hat. Eine Stadt, wo grüne Natur
          während der Hitzesommer Erholung bietet und für ruhige Quartiere
          sorgt. Wo Begegnungszonen und öffent liche Räume Orte sind, die allen
          zur Ver fügung stehen, wo Menschen zusammen kommen, sich austauschen
          und so eine Stadt schaffen, die lebt und verbindet. Wo Freiräume für
          kulturelles Schaffen und Gemeinschaft existieren. Wo Familien, junge
          und betagte Menschen, Studieren de eine hochwertige und vor allem
          bezahl bare Wohnung finden. In Winterthur zu wohnen, arbeiten und zu
          leben darf nicht zu einem Privileg der Reichen werden.
        </p>
        <p className="mb-5 w-full max-w-[1000px]">
          Doch der aktuelle Sparkurs der bürger lichen Mehrheit im
          Stadtparlament steht diesem Anliegen quer entgegen. Das Budget wurde
          um fast 9 Millionen Franken gekürzt. Zuvor wurden bereits 600’000
          Franken bei der Kulturförderung gestrichen. Und auf kantonaler Ebene
          drohen weitere Kürzungen: Die geplante Steuergesetzrevision im Kanton
          Zürich bedeuten für Winterthur einen weiteren Einnahmeausfall von 9
          Millionen Franken pro Jahr. Diese Steuervorlage ist nichts anderes als
          Steuergeschenke an die Unternehmen, auf Kosten von Bildung, Sozialem,
          Kultur oder Klimaschutz. Dagegen haben linke Parteien und Ge
          werkschaften das Referendum ergriffen.
        </p>
        <p className="mb-5 w-full max-w-[1000px]">
          Die bürgerlichen Verbände stellen sich auch quer gegen den
          Mindestlohn, den 65% der Stimmberechtigen 2023 fordern, und haben
          Rekurs eingelegt. Dieser verhindert die Einführung des fairen
          Mindestlohnlohns, der allen Menschen in Winterthur einen Lohn zum
          Leben garantiert. Dies ist ein direkter Angriff auf faire Löhne und
          demokratische Ent scheide der Bevölkerung.
        </p>
        <p className="mb-5 w-full max-w-[1000px]">
          «Winti für alle!» ist unsere Antwort auf ihre Politik. Wir alle, die
          in und um Winterthur leben, arbeiten oder in Ausbildung sind, wir
          wollen und können aus unserer Stadt einen lebenswerten Ort machen.
        </p>
        <p className="mb-5 w-full max-w-[1000px] text-xl font-bold">
          Deswegen nehmen wir uns heute laut und bunt die Strassen. Am 1. Mai
          kämpfen wir gemeinsam für ein besseres Leben für alle. Wir wollen den
          1. Mai für alle sicher machen und wir tolerieren keine Diskri-
          minierung und Gewalt jeglicher Form während der Demo und dem Fest.
          Melde dich bei Grenzüberschreitungen bei den Personen in
          Sicherheitswesten.
        </p>
        <h3 className="mb-5 mt-10 text-3xl font-bold">
          Für ein Winti für alle!
        </h3>
        <h4 className="mb-5 mt-10 text-xl font-bold">
          Das 1. MaiKomitee Winterthur
        </h4>
        <div className="my-10 w-full max-w-[1000px] border-b border-black"></div>
        <h3 className="mt-10 text-2xl font-bold">Route</h3>
        <h3 className="mb-5">Dieses Jahr starten wir auf dem Neumarkt</h3>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1ryRullQnH14yuwy8OUZrP1yloOcEchU&ehbc=2E312F&noprof=1"
          height="500"
          className="w-full max-w-[1000px]"
        ></iframe>
        <h3 className="mb-5 mt-10 text-2xl font-bold">Awareness</h3>
        <p className="w-full max-w-[1000px]">
          "Awareness" bezeichnet das Bewusstsein und die Aufmerksamkeit für
          Situationen, in denen die Grenzen anderer überschritten werden oder
          wurden. Dabei geht es um alle Formen von Diskriminierung und Gewalt,
          das heisst um sexistisches, rassistisches, homo- und transfeindliches,
          ableistisches Verhalten sowie Diskriminierung aufgrund
          Religionszugehörigkeit oder anderweitig diskriminierendes Verhalten.
          Wir möchten, dass sich alle wohl fühlen während der Demo und dem Fest.
          Und wir möchten den von der Gewalt betroffenen Personen helfen und sie
          begleiten. Ausserdem wollen wir zum Thema Awareness sensibilisieren.
          <br />
        </p>
        <h3 className="mb-5 mt-10 text-xl font-bold">Nulltoleranz</h3>
        <p className="w-full max-w-[1000px]">
          Wir wollen den 1. Mai für alle sicher machen und wir tolerieren keine
          Diskriminierung während der Demo und dem Fest. Das Awareness-Team
          hinterfragt, beurteilt oder relativiert die Wahrnehmung der
          betroffenen Person nicht. Das Awareness-Team ist immer auf der Seite
          der betroffenen Person und ergreift Partei für sie.
        </p>

        <h3 className="mb-5 mt-10 text-xl font-bold">Anonymität</h3>
        <p className="w-full max-w-[1000px]">
          Alle Informationen werden vertraulich behandelt. Das Awareness-Team
          unterliegt der Schweigepflicht.
          <br />
          Awareness-Teams während der Demo und dem Fest Während der Demo bewegen
          sich vier Personen in violetten Westen durch die Menge, am Fest zwei
          Personen. Sie sind Ansprechpersonen für Grenzüberschreitung, ganz
          egal, ob du sie selbst erlebt oder beobachtet hast.
        </p>
        <div className="my-10 w-full max-w-[1000px] border-b border-black"></div>
        <h3 className="mb-5 mt-10 text-xl font-bold">Programm</h3>
        <ul className="mx-auto w-full max-w-[1000px] list-outside list-disc pl-4">
          <li>10:30 Beginn der Demo auf dem Neumarkt</li>
          <li>12:00 1. Mai Fest in der Reithalle Winterthur</li>
          <li>
            13:00 Reden von:
            <ul className="list-inside list-disc">
              <li>
                <strong>Mattea Meyer</strong>, Nationalrätin, Co-Präsidentin SP
                Schweiz
              </li>
              <li>
                <strong>Michèle Dünki-Bättig</strong>, Co-Präsidentin VPOD
                Zürich, Kantonsrätin
              </li>
              <li>
                <strong>Bea Albermann</strong>, Ärztin und Aktivistin
              </li>
              <li>
                Weitere Reden von <strong>Monda Futura</strong>, von der{" "}
                <strong>AL</strong> und Gewerkschaftsmitgliedern der{" "}
                <strong>UNIA</strong> und des <strong>VPOD</strong>
              </li>
            </ul>
          </li>
          <li>
            15:00 Musik
            <ul className="list-inside list-disc">
              <li>
                <strong>Myla Lei</strong>
              </li>
              <li>
                <strong>OleKanone & Nova</strong>
              </li>
            </ul>
          </li>
        </ul>
        <div className="mx-auto mt-10 grid max-w-[1000px] gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <Image
            src="/2025/Mattea_meyer.png"
            alt="Mattea Meyer"
            width={1080}
            height={1350}
          />
          <Image
            src="/2025/Michèle_dünki_bättig.png"
            alt="Michèle Dünki-Bättig"
            width={1080}
            height={1350}
          />
          <Image
            src="/2025/Bea_albermann.png"
            alt="Bea Albermann"
            width={1080}
            height={1350}
          />

          <Image
            src="/2025/Olekanone_und_nova.png"
            alt="Olekanone und Nova"
            width={1080}
            height={1350}
          />
          <Image
            src="/2025/Myla_lei.png"
            alt="Myla Ley"
            width={1080}
            height={1350}
          />
        </div>
        <div className="my-10 w-full max-w-[1000px] border-b border-black"></div>
        <h3 className="mb-5 mt-10 text-xl font-bold">
          Bilder des letzten 1. Mai 2024
        </h3>
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
      </div>
    </main>
  );
}

import Link from "next/link";
import CarouselWrapper from "../../_components/CarouselWrapper";
export default function page() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex max-w-[800px] flex-col items-center">
        <h1 className="my-2 text-2xl font-bold lg:text-3xl">
          1 Mai Winterthur 2020
        </h1>
        <div className="mb-2 w-full max-w-[250px] rounded-lg border border-black p-2 text-center lg:max-w-[300px]">
          <h2 className="font-bold">Weitere Seiten von 2020</h2>
          <Link
            href={"/archive/2020/das-sagen-wir-zum-1mai"}
            className="text-blue-600 underline hover:text-purple-600"
          >
            Das sagen wir zum 1. Mai
          </Link>
          <Link
            href={"/archive/2020/wir-sind-dabei"}
            className="text-blue-600 underline hover:text-purple-600"
          >
            Wir sind dabei
          </Link>
        </div>
        <CarouselWrapper
          images={[
            "/200417_Slider_Testis_1.png",
            "/200417_Slider_Testis_16.png",
            "/200417_Slider_Testis_14.png",
            "/200417_Slider_Testis_15.png",
            "/200417_Slider_Testis_17.png",
            "/200417_Slider_Testis_13.png",
            "/200417_Slider_Testis_12.png",
          ]}
        />
        <div className="flex flex-col gap-2 text-justify">
          <p>
            Möglichst viele Unterschriften unter den nachfolgenden offenen Brief
            an die Bevölkerung sind unser Ziel. Der Brief wird am 30. April
            publiziert. Wir laden dazu ein, den 1. Mai mit und digital &amp;
            zuhause zu begehen.
            <br />
            <span className="text-red-600">
              <strong>Alle Daten werden nach dem 1. Mai gelöscht.</strong>
            </span>
            <br />
            <Link
              href={"/mitmachen"}
              className="text-blue-600 underline hover:text-purple-600"
            >
              Hier unterschreiben
            </Link>
          </p>
          <p>
            Sie sind schon mit dabei:{" "}
            <Link
              href="/archive/2020/wir-sind-dabei"
              className="text-blue-600 underline hover:text-purple-600"
            >
              Zu den Unterzeichnenden
            </Link>
          </p>
          <p>
            <strong>Einladung zum 1. Mai Winterthur 2020</strong>
          </p>
          <p>Liebe Winterthurerinnen und Winterthurer</p>
          <p>
            Die Corona-Krise trifft unsere Gesellschaft im Kern. Die letzten
            Wochen haben uns vor Augen geführt, wie wichtig Solidarität, ein
            starker Service public und funktionierende öffentliche Institutionen
            sind. Nur damit lässt sich eine solche Krise überstehen.
          </p>
          <p>
            Seit über 130 Jahren ist die Arbeiterunion für die Aktivitäten am 1.
            Mai verantwortlich. Dieses Jahr fallen diese Feierlichkeiten zum
            ersten Mal aus. Daher laden wir Sie ein, uns auf unserer
            Webplattform zu besuchen. www.1mai-winterthur.ch.{" "}
            <strong>Der 1. Mai findet statt: digital &amp; zuhause.</strong>{" "}
            Auch Sie können unseren Aufruf unterstützen, ein Statement
            übermitteln oder unser digitales Angebot am 1. Mai zuhause nutzen.
          </p>
          <p>
            Den Applaus für alle, die tagtäglich dafür sorgen, dass unser Staat
            trotz allem funktioniert, haben wir gehört. Aber das allein reicht
            nicht! Gerade in diesen «systemrelevanten» Berufen sind bessere
            Arbeitsbedingungen und höhere Löhne dringend nötig.
          </p>
          <p>
            Die Forderungen des letztjährigen Frauen*streiks und der
            Klimabewegung dürfen trotz Corona-Virus nicht vergessen werden.
          </p>
          <p>
            Wir bitten Sie, dies auch in den nächsten Wochen und Monaten nicht
            zu vergessen:
          </p>
          <ul className="list-disc">
            <li>
              Die Kosten der Krise dürfen nicht mit Sparpaketen der öffentlichen
              Hand auf die Arbeitnehmer*innen, auf Umwelt, Bildung oder soziale
              Angebote abgewälzt werden.
            </li>
            <li>
              In «systemrelevanten» Berufen sind bessere Arbeitsbedingungen und
              höhere Löhne dringend nötig. Das Pflegepersonal in den Spitäler,
              Kassier*innen in Lebensmittelläden, das Personal in der
              Kinderbetreuung oder handwerklich Tätige: sie alle verdienen mehr
              Wertschätzung. Sie sind das Fundament der Gesellschaft.
            </li>
            <li>
              Ein ausgebauter Mutterschutz, Elternzeit und existenzsichernde
              Sozialversicherungen sind kein Luxus, sondern müssen
              selbstverständlich sein.
            </li>
            <li>
              Kitas, Spielgruppen oder weitere Angebote der Frühen Bildung und
              Erziehung sind keine Privatsache, sondern gehören zu den
              Grundaufgaben der Gesellschaft.
            </li>
            <li>
              «Kultur» ist für die Gesellschaft genauso wichtig wie «die
              Wirtschaft»
            </li>
          </ul>
          <p>
            Eine solidarische und gerechtere Welt ist und bleibt unser Ziel.
            <br />
            Für die kommende Zeit wünschen wir Ihnen und Ihrem Umfeld alles
            Gute.
            <br />
            Arbeiterunion Winterthur
          </p>
          <p>
            <Link
              href="/mitmachen"
              className="text-blue-600 underline hover:text-purple-600"
            >
              Hier unterschreiben
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

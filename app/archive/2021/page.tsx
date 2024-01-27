import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div>
        <h1 className="my-2 text-2xl font-bold lg:text-3xl">
          1 Mai Winterthur 2021
        </h1>
        <Image
          src="/210426_1mai_web.png"
          alt="2021"
          width={800}
          height={1000}
        />
        <div>
          <h3>
            <strong>
              1. Mai Winterthur 2021: sozial und ökologisch aus der Krise
              <br />
            </strong>
          </h3>
          <p>
            Aufgrund der Corona-Pandemie können die Aktivitäten am 1. Mai zum
            Tag der Arbeit auch 2021 nicht in der gewohnten Form stattfinden
          </p>
          <p>
            Die Arbeiterunion als Trägerschaft der 1. Mai -Aktivitäten in
            Winterthur hat daher beschlossen, ein Konzept umzusetzen, bei dem
            keine grossen Menschenansammlungen entstehen und trotzdem ein
            Austausch unter den Teilnehmenden stattfinden kann.
          </p>
          <ul>
            <li>
              Statt einer zentralen Kundgebung mit Fest an einem Ort findet ein{" "}
              <strong>dezentraler «Polit-Parcours</strong>» statt. An
              verschiedenen Orten in der Innenstadt präsentieren sich
              Organisationen und Institutionen aus dem rot-grünen Umfeld mittels
              Ständen und bieten neben Informationen zu ihren Tätigkeiten eine
              zusätzliche Attraktion. Die{" "}
              <strong>
                AU organisiert einen zentralen Info-/Startpunkt mit einem
                Verpflegungsangebot.
              </strong>{" "}
              An diesem wird ein attraktiver Flyer/Faltprospekt mit den
              Standorten und Angeboten aller beteiligten Partner abgegeben. Es
              ist auch denkbar, dass 2 Partner zusammen einen Stand betreiben.
            </li>
            <li>
              Die <strong>BesucherInnen</strong> können im Freeflow zwischen den
              Angeboten zirkulieren. Entstehend an einem Ort unzulässige
              Ansammlungen, werden die Teilnehmenden gebeten, weiter zu gehen.
            </li>
            <li>
              Paralell dazu findet die letztes Jahr vertagte{" "}
              <strong>Ausstellung «130 Jahre 1. Mai»</strong>statt: Auf 10
              Plakatständern werden Szenen aus der 130jährigen Geschichte des 1.
              Mai präsentiert. Jede Stunde findet ein geführter Rundgang zu den
              Ausstellungstafeln statt. Die Ausstellung kann durch via das
              untenstehende Bild als pdf heruntergeladen werden.
            </li>
          </ul>
          <p>
            <Link href="https://1mai-winterthur.ch/wp-content/uploads/2021/05/210501_1Mai_Ausstellung_130_Jahre_lr.pdf">
              <img
                decoding="async"
                src="https://1mai-winterthur.ch/wp-content/uploads/2021/04/210430_1Mai_Ausstellung_130_Jahre_def_lr_Seite_01.png"
                alt=""
                width="300"
                height="424"
                srcSet="https://1mai-winterthur.ch/wp-content/uploads/2021/04/210430_1Mai_Ausstellung_130_Jahre_def_lr_Seite_01.png 300w, https://1mai-winterthur.ch/wp-content/uploads/2021/04/210430_1Mai_Ausstellung_130_Jahre_def_lr_Seite_01-212x300.png 212w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </Link>
          </p>
          <p>Das Programm dauert ca. von 11 bis 15 Uhr.</p>
        </div>
      </div>
    </main>
  );
}

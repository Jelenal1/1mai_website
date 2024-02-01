import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex max-w-[800px] flex-col items-center gap-2">
        <h1 className="my-2 text-2xl font-bold lg:text-3xl">
          Flüchtlingssolidarität
        </h1>
        <div className="flex flex-col items-center rounded-3xl border border-black px-4 pb-4 pt-10">
          <Image
            src="/1mai_testimonials/griechenland-300x225.jpg"
            alt="Griechenland"
            width={300}
            height={225}
          />
          <p className="text-sm italic">
            Flüchtlinge in einem Lager auf der griechischen Insel Lesbos.
            (Archivbild)
          </p>
        </div>
        <p>
          Aid hoc ist eine kleine NGO aus der Schweiz, welche Menschen auf der
          Flucht am Rande Europas unterstützt. Wir leisten vor Ort humanitäre
          Direkthilfe und versuchen, möglichst unmittelbar auf die dringendsten
          Bedürfnisse zu reagieren. Zu diesem Zweck sammeln wir in der Schweiz
          Geld- und Sachspenden, die durch unsere Mitglieder bzw. Partner vor
          Ort sinnvoll eingesetzt werden können.
          <br />
          <br />
          Website:{" "}
          <Link
            href="https://aidhoc.org/"
            className="text-blue-600 underline hover:text-purple-600"
          >
            https://aidhoc.org/
          </Link>
        </p>
        <div className="mr-auto">
          <h2 className="mt-2 text-2xl font-bold">Spenden</h2>
          <div>
            <span className="text-xl text-rose-600">IBAN:</span>
            <span className="ml-2 text-xl">CH30 8000 5000 0546 4499 1</span>
          </div>
          <div>
            <span className="text-xl text-rose-600">Zahlungszweck:</span>
            <span className="ml-2 text-xl">Name, Email</span>
          </div>
          <div>
            <span className="text-xl text-rose-600">Kontoinhaber:</span>
            <span className="ml-2 text-xl">Verein aid hoc</span>
          </div>
          <div>
            <span className="text-xl text-rose-600">Adresse:</span>
            <span className="ml-2 text-xl">
              Parkstrasse 16, 9000 St. Gallen
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

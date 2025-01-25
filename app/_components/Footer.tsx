import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-9 my-2 flex flex-col items-center border-t-2 border-black">
      <div className="flex max-w-[800px] flex-col items-center">
        <h2 className="mt-2 text-xl font-bold">Impressum</h2>
        <div>
          <p>
            Der 1. Mai in Winterthur wird seid über 130 Jahren durch die
            Arbeiterunion organisiert.
          </p>
          <p>
            Kontakt: Arbeiterunion Winterthur 8400 Winterthur
            <br /> E-Mail:{" "}
            <Link
              href="mailto:buero@1mai-winterthur.ch"
              className="text-blue-600 underline hover:text-purple-600"
            >
              buero@1mai-winterthur.ch
            </Link>
          </p>
        </div>
        <div className="mt-3 flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold">Links</h2>
          <Link
            href="/"
            className="text-blue-600 underline hover:text-purple-600"
          >
            Home
          </Link>
          <Link
            href="/spenden"
            className="text-blue-600 underline hover:text-purple-600"
          >
            Spenden
          </Link>
        </div>
      </div>
    </div>
  );
}

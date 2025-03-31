import Link from "next/link";

const Page = () => {
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <h1 className="my-2 text-2xl font-bold lg:text-3xl">Impressum</h1>
      <p className="w-full max-w-[800px] text-lg">
        Der 1. Mai in Winterthur wird seid über 130 Jahren durch die
        Arbeiterunion organisiert. <br />
        Kontakt: Arbeiterunion Winterthur 8400 Winterthur
        <br /> E-Mail:{" "}
        <Link
          href="mailto:buero@1mai-winterthur.ch"
          className="text-blue-600 underline hover:text-purple-600"
        >
          buero@1mai-winterthur.ch
        </Link>
      </p>
    </main>
  );
};

export default Page;

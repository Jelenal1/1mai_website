import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-9 flex flex-col items-center border-t-2 border-black p-10">
      <div className="flex w-full items-center justify-center">
        <Link className="mx-4" href={"/impressum"}>
          Impressum
        </Link>
        <Link className="mx-4" href={"/datenschutz"}>
          Datenschutzerklärung
        </Link>
        <Link className="mx-4" href={"/mitmachen"}>
          Mitmachen
        </Link>
      </div>
      <Link className="mt-10" href={"/"}>
        © 1 Mai Winterthur {new Date().getFullYear()}
      </Link>
    </div>
  );
}

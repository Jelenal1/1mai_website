"use client";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function Sidenav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [openArchiv, setOpenArchiv] = useState(false);
  return (
    <div
      className={
        open
          ? "fixed right-0 top-0 h-screen w-screen items-center bg-amber-100 bg-opacity-80 opacity-100 backdrop-blur transition-all ease-in"
          : "invisible fixed right-0 top-0 h-screen w-screen items-center bg-opacity-60 opacity-0 backdrop-blur transition-all duration-200 ease-out"
      }
    >
      <div className="flex flex-col items-center">
        <button
          className="mx-auto mt-20 w-fit"
          onClick={() => {
            setOpen(false);
          }}
        >
          <FiX size={30} />
        </button>
        <Link href={"/"} className="mx-auto mt-5 text-xl">
          Home
        </Link>
        <Link href={"/blog"} className="mx-auto mt-5 text-xl">
          Blog
        </Link>
        <Link href={"/ueber-uns"} className="mx-auto mt-5 text-xl">
          Über uns
        </Link>
        <Link href={"/mitmachen"} className="mx-auto mt-5 text-xl">
          Mitmachen
        </Link>
        <button
          onClick={() => {
            setOpenArchiv(!openArchiv);
          }}
          className="mx-auto mt-5 text-xl"
        >
          Archiv
        </button>

        <div
          className={
            openArchiv
              ? "flex flex-col opacity-100 transition-all"
              : "invisible flex flex-col opacity-0 transition-all"
          }
        >
          <Link
            href={"/archive/2023"}
            className="mx-auto mt-2 w-16 border-t border-black text-center text-xl"
          >
            2023
          </Link>
          <Link
            href={"/archive/2021"}
            className="mx-auto mt-1 w-16 text-center text-xl"
          >
            2021
          </Link>
          <Link
            href={"/archive/2020"}
            className="mx-auto mt-1 w-16 text-center text-xl"
          >
            2020
          </Link>
        </div>
      </div>
    </div>
  );
}

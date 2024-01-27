"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidenav from "./Sidenav";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openArchiv, setOpenArchiv] = useState(false);

  return (
    <div className="sticky top-0 z-10 flex min-h-[100px] w-full flex-col border-b-2 border-black px-2 backdrop-blur ">
      <div className="mt-8 flex w-full items-center">
        <Link href={"/"}>
          <h1 className="ml-2 text-2xl hover:cursor-pointer">
            1 Mai Winterthur
          </h1>
        </Link>
        <button
          className="ml-auto mr-2 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={30} />
        </button>
        <Sidenav open={open} setOpen={setOpen} />
        <div className="ml-20 hidden gap-10 text-xl lg:flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/mitmachen"}>Mitmachen</Link>
          <Link href={"/spenden"}>Spenden</Link>
          <Link href={"/ueber-uns"}>Über uns</Link>
          <button onClick={() => setOpenArchiv(!openArchiv)}>Archiv</button>
        </div>
      </div>
      <div
        className={
          openArchiv
            ? "ml-[738px] hidden w-fit gap-2 border-t border-black transition-all lg:flex"
            : "invisible flex w-fit gap-2 transition-all"
        }
      >
        <Link href={"/archive/2023"}>2023</Link>
        <Link href={"/archive/2021"}>2021</Link>
        <Link href={"/archive/2023"}>2020</Link>
      </div>
    </div>
  );
}

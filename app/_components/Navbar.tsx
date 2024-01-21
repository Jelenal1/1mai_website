"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidenav from "./Sidenav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 flex h-20 w-full items-center border-b-2 border-black px-2 backdrop-blur ">
      <h1 className="ml-2 text-2xl hover:cursor-pointer">1 Mai Winterthur</h1>
      <button className="ml-auto mr-2 lg:hidden" onClick={() => setOpen(true)}>
        <FiMenu size={30} />
      </button>
      <Sidenav open={open} setOpen={setOpen} />
      <div className="ml-20 hidden gap-10 text-xl lg:flex">
        <button onClick={() => redirect("/")}>Home</button>
        <button onClick={() => redirect("/")}>Mitmachen</button>
        <button onClick={() => redirect("/")}>Spenden</button>
        <button onClick={() => redirect("/")}>Archiv</button>
      </div>
    </div>
  );
}

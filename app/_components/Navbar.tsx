"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidenav from "./Sidenav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky flex items-center top-0 w-full h-20 border-b-2 border-black">
      <h1 className="text-2xl ml-2 hover:cursor-pointer">1 Mai Winterthur</h1>
      <button className="ml-auto mr-2 lg:hidden" onClick={() => setOpen(true)}>
        <FiMenu size={30} />
      </button>
      <Sidenav open={open} setOpen={setOpen} />
      <div className="lg:flex ml-20 gap-10 text-xl hidden">
        <button onClick={() => redirect("/")}>Home</button>
        <button onClick={() => redirect("/")}>Mitmachen</button>
        <button onClick={() => redirect("/")}>Spenden</button>
        <button onClick={() => redirect("/")}>Archiv</button>
      </div>
    </div>
  );
}

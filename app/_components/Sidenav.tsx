"use client";
import { redirect } from "next/navigation";
import { FiX } from "react-icons/fi";

export default function Sidenav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div
      className={
        open
          ? "fixed right-0 top-0 h-screen w-screen items-center bg-opacity-60 backdrop-blur transition-all ease-in"
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
        <button className="mx-auto mt-5 text-xl" onClick={() => redirect("/")}>
          Home
        </button>
        <button className="mx-auto mt-5 text-xl" onClick={() => redirect("/")}>
          Mitmachen
        </button>
        <button className="mx-auto mt-5 text-xl" onClick={() => redirect("/")}>
          Spenden
        </button>
        <button className="mx-auto mt-5 text-xl" onClick={() => redirect("/")}>
          Archiv
        </button>
      </div>
    </div>
  );
}

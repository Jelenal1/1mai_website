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
      className={`fixed flex flex-col top-0 ${
        open ? "right-0" : "-right-full"
      } w-36 h-screen bg-white border-l-2 border-black transition-all duration-300`}
    >
      <button
        className="mx-auto mt-5 w-fit"
        onClick={() => {
          setOpen(false);
        }}
      >
        <FiX size={30} />
      </button>
      <button className="mx-auto mt-5 text-xl">Home</button>
      <button className="mx-auto mt-5 text-xl">Mitmachen</button>
      <button className="mx-auto mt-5 text-xl">Spenden</button>
      <button className="mx-auto mt-5 text-xl">Archiv</button>
    </div>
  );
}

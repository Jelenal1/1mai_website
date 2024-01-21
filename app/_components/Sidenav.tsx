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
      className={`fixed top-0 flex flex-col ${
        open ? "right-0" : "-right-full"
      } h-screen w-36 border-l-2 border-black backdrop-blur transition-all duration-300`}
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

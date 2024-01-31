"use client";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export default function DeleteButton({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const handleDelete = async (id: string) => {
    const docRef = doc(db, "articles", id);
    await deleteDoc(docRef);
    return;
  };

  return (
    <button className={className} onClick={() => handleDelete(id)}>
      🗑️
    </button>
  );
}

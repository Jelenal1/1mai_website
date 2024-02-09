"use client";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    const docRef = doc(db, "articles", id);
    const result = await deleteDoc(docRef);
    console.log(result);
    router.refresh();
  };

  return (
    <button className={className} onClick={() => handleDelete(id)}>
      🗑️
    </button>
  );
}

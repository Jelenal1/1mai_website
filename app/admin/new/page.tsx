import AdminForm from "@/app/_components/AdminForm";
import { auth, db } from "@/app/_components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { redirect } from "next/navigation";

export default function page() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      redirect("/admin/login");
    }
  });
  return (
    <main className="mx-2 mb-10">
      <AdminForm />
    </main>
  );
}

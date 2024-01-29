import AdminForm from "@/app/_components/AdminForm";
import { auth } from "@/app/_components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "next/navigation";

export default function page() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      redirect("/admin/login");
    }
  });
  async function handleFormsData(data: FormData) {
    "use server";
    console.log(data);
  }
  return (
    <main className="mx-2 mb-10">
      <AdminForm handleFormsData={handleFormsData} />
    </main>
  );
}

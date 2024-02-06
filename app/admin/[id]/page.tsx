import { auth, db } from "@/app/_components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import { article } from "@/app/blog/page";
import AdminBlogEdit from "@/app/_components/AdminBlogEdit";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);

  const articleData = {
    id: docSnap.id,
    ...docSnap.data(),
  } as article;
  if (!docSnap.exists()) redirect("/blog");
  return <AdminBlogEdit articleData={articleData} />;
}

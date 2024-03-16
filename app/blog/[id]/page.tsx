import { db } from "@/app/_components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import { article } from "../page";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);
  const articleData = docSnap.data() as article;
  if (!docSnap.exists()) redirect("/blog");
  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex max-w-[800px] flex-col items-center">
        <h1 className="mt-2 text-2xl font-bold lg:text-3xl">
          {articleData.title}
        </h1>
        <h2 className="text-sm">{articleData.author}</h2>
        {articleData.imageurl ? (
          <img
            src={articleData.imageurl}
            alt={articleData.title}
            className="my-2"
          />
        ) : (
          <Image
            src="/1Mai_Banner_24.png"
            width={800}
            height={800}
            alt="Winti den Menschen nicht dem Profit Banner"
            className="my-2"
          />
        )}
        {articleData.content.split("\n").map((paragraph, index) => (
          <p key={index} className="my-2 w-full">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}

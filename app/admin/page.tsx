import { collection, getDocs } from "firebase/firestore";
import { article } from "../blog/page";
import { db } from "../_components/firebase";
import Link from "next/link";
import Blogpostpreview from "../_components/Blogpostpreview";
import { CiCirclePlus } from "react-icons/ci";
import DeleteButton from "../_components/DeleteButton";
import LogoutButton from "../_components/LogoutButton";

export default async function page() {
  async function getArticles() {
    const querySnapshot = await getDocs(collection(db, "articles"));

    const articles: article[] = [];
    for (const doc of querySnapshot.docs) {
      articles.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        content: doc.data().content,
        date: doc.data().date,
        author: doc.data().author,
        imageurl: doc.data().imageurl,
      });
    }
    return articles;
  }
  const articles = await getArticles();

  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex w-full max-w-[800px] flex-col items-center">
        <LogoutButton />
        <h1 className="my-2 text-2xl font-bold lg:text-3xl">Artikel</h1>
        <Link
          href="/admin/new"
          className="mb-2 flex items-center rounded bg-green-500 p-2"
        >
          <CiCirclePlus className="mr-1 mt-1 text-3xl" /> Artikel hinzufügen
        </Link>
        {articles.map((article: article) => (
          <div className="relative">
            <Link href={`/admin/${article.id.toString()}`}>
              <Blogpostpreview article={article} />
            </Link>
            <span className="absolute right-0 top-0 text-3xl">📝</span>
            <DeleteButton
              id={article.id.toString()}
              className="absolute left-0 top-0 text-3xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

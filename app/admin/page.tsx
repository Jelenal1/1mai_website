import { collection, getDoc, getDocs } from "firebase/firestore";
import { articlewithauthor, author } from "../blog/page";
import { auth, db } from "../_components/firebase";
import Link from "next/link";
import Blogpostpreview from "../_components/Blogpostpreview";
import { CiCirclePlus } from "react-icons/ci";
import { redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

export default async function page() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      redirect("/admin/login");
    }
  });
  async function getArticles() {
    const querySnapshot = await getDocs(collection(db, "articles"));

    const articles: articlewithauthor[] = [];
    for (const doc of querySnapshot.docs) {
      const authorPromise = await getDoc(doc.data().author);
      const author = authorPromise.data() as author;
      articles.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        content: doc.data().content,
        date: doc.data().date,
        author: author,
      });
    }
    return articles;
  }
  const articles = await getArticles();

  return (
    <main className="mx-9 mb-10 flex flex-col items-center">
      <div className="flex w-full max-w-[800px] flex-col items-center">
        <h1 className="my-2 text-2xl font-bold lg:text-3xl">Artikel</h1>
        <Link
          href="/admin/new"
          className="mb-2 flex items-center rounded bg-green-500 p-2"
        >
          <CiCirclePlus className="mr-1 mt-1 text-3xl" /> Artikel hinzufügen
        </Link>
        {articles.map((article: articlewithauthor) => (
          <Link href={`/admin/${article.id.toString()}`} className="relative">
            <Blogpostpreview article={article} />
            <span className="absolute right-0 top-0 text-3xl">📝</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

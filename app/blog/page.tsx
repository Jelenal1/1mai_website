import {
  DocumentReference,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/app/_components/firebase";
import Blogpostpreview from "../_components/Blogpostpreview";
import Link from "next/link";

export type article = {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  imageurl: string;
};

export default async function Blog() {
  const querySnapshot = await getDocs(collection(db, "articles"));
  async function getArticles() {
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
      <h2 className="mb-3 text-xl font-bold lg:text-2xl">Blog</h2>
      {articles.map((article: article) => (
        <Link key={article.id} href={`/blog/${article.id.toString()}`}>
          <Blogpostpreview key={article.id} article={article} />
        </Link>
      ))}
    </main>
  );
}

import { article } from "../blog/page";

export default function Blogpostpreview({ article }: { article: article }) {
  return (
    <div className="flex min-w-[300px] max-w-[400px] flex-col rounded-xl border border-black p-2 text-center">
      <h2 className="text-xl">{article.title}</h2>
      <h3>{article.author}</h3>
      <h4 className="text-sm">{article.date}</h4>
      <img src="//via.placeholder.com/300" alt="" />
      <p>{article.description}</p>
    </div>
  );
}

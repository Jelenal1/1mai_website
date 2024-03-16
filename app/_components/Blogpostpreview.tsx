import { article } from "../blog/page";

export default function Blogpostpreview({ article }: { article: article }) {
  return (
    <div className="mb-6 flex min-w-[300px] max-w-[400px] flex-col rounded-xl border border-black p-2 text-center">
      <h2 className="text-xl">{article.title}</h2>
      <h3>{article.author}</h3>
      <h4 className="text-sm">{article.date}</h4>
      {article.imageurl ? (
        <img src={article.imageurl} alt={article.title + " Bild"} />
      ) : (
        <img
          src="/1Mai_Banner_24.png"
          alt="Winti den Menschen nicht dem Profit Banner"
        />
      )}
      <p>{article.description}</p>
    </div>
  );
}

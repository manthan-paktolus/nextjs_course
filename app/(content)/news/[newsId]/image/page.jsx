import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import { DUMMY_NEWS } from "@/dummy-news";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

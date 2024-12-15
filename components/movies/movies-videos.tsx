import { BASE_URL } from "../../lib/config";
import potato from "../styles/movie_video.module.css";

async function getTrailers(id: String) {
  console.log(`fetching trailers:${Date.now()}`);
  const response = fetch(BASE_URL + `/${id}/videos`);
  return (await response).json();
}

export default async function MovieVideo({ id }: { id: String }) {
  const videos = await getTrailers(id);
  return (
    <div className={potato.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}

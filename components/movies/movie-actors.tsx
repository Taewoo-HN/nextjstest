import { BASE_URL } from "../../lib/config";
import styles from "../styles/movie_video.module.css";

async function getActors(id: String) {
  const response = fetch(BASE_URL + `/${id}/credits`);
  return (await response).json();
}

export default async function MovieActor({ id }: { id: String }) {
  const actors = await getActors(id);
  return (
    <div>
      {actors.map((actor) => (
        <div className={}>
          <img src={actor.profile_path} />
          <h3>
            {actor.original_name} / {actor.character}
          </h3>
        </div>
      ))}
    </div>
  );
}

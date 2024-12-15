import { BASE_URL } from "../../lib/config";
import styles from "../../styles/movie_video.module.css";

async function getActors(id: String) {
  const response = fetch(BASE_URL + `/${id}/credits`);
  return (await response).json();
}

export default async function MovieActor({ id }: { id: String }) {
  const actors = await getActors(id);
  return (
    <div>
      {actors.map((actor) => (
        <div key={actors.id} className={styles.container}>
          <img src={actor.profile_path} />
          <p>
            {actor.original_name} / {actor.character}
          </p>
        </div>
      ))}
    </div>
  );
}

import { BASE_URL } from "../../lib/config";
import styles from "../../styles/movie_actor.module.css";
import images from "../../lib/default_profile.jpg";

async function getActors(id: String) {
  const response = fetch(BASE_URL + `/${id}/credits`);
  return (await response).json();
}

export default async function MovieActor({ id }: { id: String }) {
  const actors = await getActors(id);
  return (
    <div>
      <h3 className={styles.actors}>Actors</h3>
      {actors.map((actor) => (
        <div key={actors.id} className={styles.container}>
          <img
            src={actor.profile_path === null ? images : actor.profile_path}
            alt="actor profile picture"
          />
          <p>
            {actor.original_name} / {actor.character}
          </p>
        </div>
      ))}
    </div>
  );
}

import { BASE_URL } from "../../lib/config";
import styles from "../../styles/movie_actor.module.css";

async function getActors(id: String) {
  const response = fetch(BASE_URL + `/${id}/credits`);
  return (await response).json();
}

export default async function MovieActor({ id }: { id: String }) {
  const actors = await getActors(id);
  return (
    <div>
      <h3 className={styles.actors}>Actors</h3>
      <div className={styles.container}>
        {actors.map((actor) => (
          <div key={actor.id} className={styles.profile}>
            <img
              src={
                actor.profile_path ? actor.profile_path : "/default_profile.jpg"
              }
              alt="actor profile picture"
            />
            <p>{actor.original_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

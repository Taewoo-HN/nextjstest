import { BASE_URL } from "../lib/config";
import styles from "../styles/movie_info.module.css";

export async function getMovie(id: String) {
  console.log(`fetching moives:${Date.now()}`);
  const response = fetch(BASE_URL + `/${id}`);
  return (await response).json();
}

export default async function MovieInfo({ id }: { id: String }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          🏚️ Homepage &rarr;
        </a>
        <p>{movie.budget}</p>
        <p>{movie.revenue}</p>
        <p>{movie.runtime}</p>
      </div>
    </div>
  );
}

import { BASE_URL } from "../../lib/config";
import styles from "../../styles/movie_info.module.css";

export async function getMovie(id: String) {
  const response = fetch(BASE_URL + `/${id}`);
  return (await response).json();
}

export default async function MovieInfo({ id }: { id: String }) {
  const movie = await getMovie(id);
  const formatter = new Intl.NumberFormat("en-US");
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        {movie.vote_average >= 5.5 ? (
          <h3 className={styles.info}>😍 {movie.vote_average.toFixed(1)}</h3>
        ) : (
          <h3 className={styles.info}>😥 {movie.vote_average.toFixed(1)} </h3>
        )}
        <p className={styles.info}>{movie.overview}</p>
        <a className={styles.info} href={movie.homepage} target={"_blank"}>
          🏚️ Homepage &rarr;
        </a>
        <p className={styles.info}>
          Budget : $ {formatter.format(movie.budget)}
        </p>
        <p className={styles.info}>
          Revenue : $ {formatter.format(movie.revenue)}
        </p>
        <p className={styles.info}> Runtime : {movie.runtime} min </p>
      </div>
    </div>
  );
}

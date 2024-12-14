import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { BASE_URL } from "../../lib/config";

// 메타데이터는 병합되어 최종적으로 렌더링됨
export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const movies = await fetch(BASE_URL).then((resp) => resp.json());
  return movies;
}
// (폴더명) -> url을 수정하지 않음
export default async function HomePage() {
  let movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

import Link from "next/link";

// 메타데이터는 병합되어 최종적으로 렌더링됨
export const Metadata = {
  title: "Home",
};

export const BASE_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const movies = await fetch(BASE_URL).then((resp) => resp.json());
  return movies;
}
// (폴더명) -> url을 수정하지 않음
export default async function HomePage() {
  let movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

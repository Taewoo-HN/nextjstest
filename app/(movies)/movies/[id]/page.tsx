import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movies/movie-info";
import MovieVideo from "../../../../components/movies/movies-videos";
import MovieActor from "../../../../components/movies/movie-actors";

interface IParams {
  params: Promise<{
    id: string;
  }>;
}
export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// Next.js 15 -> async, Promise를 사용해야 params과 searchParams를 사용할 수 있음
export default async function MoviesPages({ params }: IParams) {
  //fallback은 Suspense가 로딩 중일 때 보여줄 컴포넌트
  //Suspense는 서버-사이드 렌더링(SSR)을 지원하지 않음
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h2>Loading Movie Infomation</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading Movie Actors</h2>}>
        <MovieActor id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading Movie Videos</h2>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}

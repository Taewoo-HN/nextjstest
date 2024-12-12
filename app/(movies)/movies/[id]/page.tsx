import { Suspense } from "react";
import MovieInfo from "../../../../components/moive-info";
import MovieVideo from "../../../../components/movies-videos";

export const Metadata = {
  title: "Movie Detail",
};

// Next.js 15 -> async를 사용해야 params과 searchParams를 사용할 수 있음
export default async function MoviesPages({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //fallback은 Suspense가 로딩 중일 때 보여줄 컴포넌트
  //Suspense는 서버사이드 렌더링을 지원하지 않음
  const { id } = await params;
  return (
    <div>
      <h3>Movie Detail pages</h3>
      <Suspense fallback={<h2>Loading Movie Infomation</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h2>Loading Movie Videos</h2>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}

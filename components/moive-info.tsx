import { BASE_URL } from "../app/(home)/page";

async function getMovie(id: String) {
  console.log(`fetching moives:${Date.now()}`);
  const response = fetch(BASE_URL + `/${id}`);
  return (await response).json();
}

export default async function MovieInfo({ id }: { id: String }) {
  const movie = await getMovie(id);
  return <h2>{JSON.stringify(movie.title)}</h2>;
}

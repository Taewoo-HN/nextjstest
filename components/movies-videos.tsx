import { BASE_URL } from "../app/(home)/page";

async function getTrailers(id: String) {
  console.log(`fetching trailers:${Date.now()}`);
  const response = fetch(BASE_URL + `/${id}/videos`);
  return (await response).json();
}

export default async function MovieVideo({ id }: { id: String }) {
  const videos = await getTrailers(id);
  return <h5>{JSON.stringify(videos)}</h5>;
}

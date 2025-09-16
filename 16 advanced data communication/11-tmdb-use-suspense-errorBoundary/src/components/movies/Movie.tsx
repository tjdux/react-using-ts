import { Suspense, useMemo } from "react";
import axiosIntance from "../../api/axios";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import MovieLoader from "./MovieLoader";
import { ErrorBoundary } from "react-error-boundary";
import MovieError from "./MovieError";
import useMovieStore from "../../store/movieStore";

const fetchData = async (endpoint: string, page: number) => {
  const {
    data: { results, total_pages },
  } = await axiosIntance.get(`${endpoint}?page=${page}`);
  return { results, total_pages };
};

export default function Movie() {
  const page = useMovieStore((state) => state.page);

  const movieData = useMemo(() => fetchData("now_playing", page), [page]);

  return (
    <>
      <MovieHeader />
      <MovieMain />
      <ErrorBoundary fallback={<MovieError title={"Now Playing"} />}>
        <Suspense fallback={<MovieLoader title={"Now Playing"} />}>
          <MovieList promise={movieData} title={"Now Playing"} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

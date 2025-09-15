import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import axiosInstance from "../../api/axios";

export default function Movie() {
  const [nowPlayingData, setNowPlayingData] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [nowPopularData, setNowPopularData] = useState<MovieType[]>([]);
  const [isPopularLoading, setIsPopularLoading] = useState(false);
  const [errorPopular, setErrorPopular] = useState<Error | null>(null);

  const [nowTopData, setNowTopData] = useState<MovieType[]>([]);
  const [isTopLoading, setIsTopLoading] = useState(false);
  const [errorTop, setErrorTop] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchNowPlayingData = async (
      endpoint: string,
      setData: React.Dispatch<React.SetStateAction<MovieType[]>>,
      setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setError: React.Dispatch<React.SetStateAction<Error | null>>
    ) => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          [2000, 3000, 4000, 5000, 6000][Math.floor(Math.random() * 5)]
        )
      );

      try {
        const {
          data: { results },
        } = await axiosInstance.get(`/${endpoint}`, { signal });
        setData(results);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") setError(e);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };
    fetchNowPlayingData(
      "now_playing",
      setNowPlayingData,
      setIsLoading,
      setError
    );
    fetchNowPlayingData(
      "popular",
      setNowPopularData,
      setIsPopularLoading,
      setErrorPopular
    );
    fetchNowPlayingData(
      "top_rated",
      setNowTopData,
      setIsTopLoading,
      setErrorTop
    );

    return () => controller.abort();
  }, []);

  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList
        movies={nowPlayingData}
        title="now Playing"
        isLoading={isLoading}
        error={error}
      />
      <MovieList
        movies={nowPopularData}
        title="now Popular"
        isLoading={isPopularLoading}
        error={errorPopular}
      />
      <MovieList
        movies={nowTopData}
        title="now Top Rated"
        isLoading={isTopLoading}
        error={errorTop}
      />
    </>
  );
}

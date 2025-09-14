import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { axiosInstance } from "../../api/axios";

export default function Movie() {
  const [nowData, setNowData] = useState<MovieType[]>([]);
  const [nowLoading, setNowLoading] = useState(false);
  const [nowError, setNowError] = useState<Error | null>(null);

  const [popData, setPopData] = useState<MovieType[]>([]);
  const [popLoading, setPopLoading] = useState(false);
  const [popError, setPopError] = useState<Error | null>(null);

  const [topData, setTopData] = useState<MovieType[]>([]);
  const [topLoading, setTopLoading] = useState(false);
  const [topError, setTopError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCategory = async (
      endpoint: string,
      setData: React.Dispatch<React.SetStateAction<MovieType[]>>,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setError: React.Dispatch<React.SetStateAction<Error | null>>
    ) => {
      setLoading(true);
      setError(null);

      await new Promise((resolve) =>
        setTimeout(
          resolve,
          [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)]
        )
      );
      try {
        const {
          data: { results },
        } = await axiosInstance.get(`/${endpoint}`, {
          signal,
        });
        setData(results);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") setError(e);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchCategory("now_playing", setNowData, setNowLoading, setNowError);
    fetchCategory("popular", setPopData, setPopLoading, setPopError);
    fetchCategory("top_rated", setTopData, setTopLoading, setTopError);
    return () => controller.abort();
  }, []);
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList
        title="Now Playing"
        movies={nowData}
        loading={nowLoading}
        error={nowError}
      />
      <MovieList
        title="Popular"
        movies={popData}
        loading={popLoading}
        error={popError}
      />
      <MovieList
        title="Top Rated"
        movies={topData}
        loading={topLoading}
        error={topError}
      />
    </>
  );
}

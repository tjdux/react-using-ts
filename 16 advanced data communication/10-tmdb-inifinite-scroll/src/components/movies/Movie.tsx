import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { axiosInstance } from "../../api/axios";
import { useInView } from "react-intersection-observer";

export default function Movie() {
  const [nowData, setNowData] = useState<MovieType[]>([]);
  const [nowLoading, setNowLoading] = useState(false);
  const [nowError, setNowError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 무한 스크롤
  const { ref } = useInView({
    threshold: 0.5, //ref가 얼마만큼 보여지면 로딩하는지
    rootMargin: "200px", // 여백
    onChange: (inView: boolean) => {
      // 바닥에 닿으면 (ref로 연결한 요소가 50% 이상 보이면)
      if (inView && !nowLoading && hasMore) {
        setPage((page) => page + 1);
      }
    },
  });

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

      // 로딩
      // await new Promise((resolve) =>
      //   setTimeout(
      //     resolve,
      //     [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)]
      //   )
      // );
      try {
        const {
          data: { results, total_pages },
        } = await axiosInstance.get(`/${endpoint}?page=${page}`, {
          signal,
        });
        setHasMore(page < total_pages);
        if (page === 1) setData(results);
        else setData((data) => [...data, ...results]);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") setError(e);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchCategory("now_playing", setNowData, setNowLoading, setNowError);
    return () => controller.abort();
  }, [page]);

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
      <div ref={ref}></div>
    </>
  );
}

import { Heart } from "lucide-react";
import {
  useEffect,
  useOptimistic,
  useState,
  startTransition,
  useRef,
} from "react";
import axios from "axios";

interface Post {
  id: number;
  isLike: boolean;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const controller = useRef<AbortController | null>(null);
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    posts,
    (statePosts, id) => {
      return statePosts.map((statePost) =>
        statePost.id === id
          ? { ...statePost, isLike: !statePost.isLike }
          : statePost
      );
    }
  );

  const handleLike = async (id: number, isLike: boolean) => {
    controller.current?.abort();
    controller.current = new AbortController();
    startTransition(async () => {
      addOptimisticPosts(id);
      try {
        const { data } = await axios.patch(
          `http://localhost:3000/posts/${id}`,
          {
            isLike: !isLike,
          },
          { signal: controller.current?.signal }
        );
        setPosts((posts) =>
          posts.map((post) => (post.id === id ? data : post))
        );
      } catch (e) {
        console.error(e);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("http://localhost:3000/posts");
        setPosts(data);
      } catch (e) {
        console.error(`에러 발생: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {optimisticPosts.map((post) => (
        <Heart
          key={post.id}
          fill={post.isLike ? "rgb(255,0,0)" : "none"}
          stroke={post.isLike ? "rgb(255, 0, 0)" : "currentColor"}
          onClick={() => handleLike(post.id, post.isLike)}
        />
      ))}
    </>
  );
}

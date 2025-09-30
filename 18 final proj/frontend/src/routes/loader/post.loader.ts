import { LoaderFunctionArgs } from "react-router";
import { axiosInstance } from "../../api/axios";
import { requireAuth } from "./auth.loader";

// 메인 페이지 데이터
export const fetchOverview = async () => {
  try {
    const { data } = await axiosInstance.get("/posts/overview");
    return data;
  } catch (e) {
    console.error(e);
  }
};

// 개별 포스트
export const fetchPostDetail = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { data } = await axiosInstance.get(`/posts/${params.id}`);
    const {
      data: { posts: relatedPosts },
    } = await axiosInstance.get(`/posts?category=${data.category}&&limit=3`);
    return { post: data, relatedPosts };
  } catch {
    return { post: null, relatedPosts: null };
    //console.error(e);
  }
};

// 포스트 수정
export const fetchPostModify = async ({ params }: LoaderFunctionArgs) => {
  try {
    const auth = requireAuth();
    if (auth) return auth;
    const { data } = await axiosInstance.get(`/posts/${params.id}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

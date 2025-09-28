interface Author {
  _id: string;
  profileImage: string;
  nickname: string;
}

interface Post {
  _id: string;
  title: string;
  category: string;
  thumbnail: string;
  content: string;
  author: Author;
  comments: string[];
  viewCount: number;
  createdAt: string;
}

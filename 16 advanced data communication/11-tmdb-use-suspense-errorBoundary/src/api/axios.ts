import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzZlYTJjNDVjMmVmMGVmYzgwNWI5ODM4M2VlNmQ0ZSIsIm5iZiI6MTc0ODQxOTA4Ny4yMTksInN1YiI6IjY4MzZjMjBmNjViNTUxMGIyNmViM2ZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ygrNu5IIqQtJ0oTKfbNQg03kifv9wjXjKnd_VDEf1o",
  },
});

export default axiosIntance;

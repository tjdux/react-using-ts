import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MS42Mjk4NjMyNTcxMjk5OTk5ZSs5LCJzdWIiOiI2MTI1YmQ1OThjMzE1OTAwNjI5ODk1MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.A_Xpkh-NvArzvV4AAztWB2xABfmBlh11yy1dyNfy7wY",
  },
});

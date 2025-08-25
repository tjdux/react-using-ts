import Global from "./components/Global";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <h1 className={styles.title}>App Component</h1>
      <h1 className="title">title</h1>
      <Global />
    </>
  );
}

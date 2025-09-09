import Count from "./components/Count";
import CountOutside from "./components/CountOutside";
import Theme from "./components/Theme";
import CounterProvider from "./context/counter/CounterProvider";
import ThemeProvider from "./context/counter/theme/ThemeProvider";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <CounterProvider>
          <Count />
          <CountOutside />
          <Theme />
          <ThemeButton />
        </CounterProvider>
      </ThemeProvider>
    </>
  );
}

import "./App.css";
import RouterProvider from "./constants/RoutesProvider";
import ThemeProvider from "./context/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;

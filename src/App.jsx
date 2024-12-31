import "./App.css";
import RouterProvider from "./constants/RoutesProvider";
import AuthProvider from "./context/auth/AuthProvider";
import ThemeProvider from "./context/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

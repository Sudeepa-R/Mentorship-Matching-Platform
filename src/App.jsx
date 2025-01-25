import { Provider } from "react-redux";
import "./App.css";
import RouterProvider from "./constants/RoutesProvider";
import AuthProvider from "./context/auth/AuthProvider";
import ThemeProvider from "./context/theme/ThemeProvider";
import AppLayout from "./dashboard/AppLayout/Layout";
import store from "./components/react-redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <AppLayout>
            <RouterProvider />
          </AppLayout>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

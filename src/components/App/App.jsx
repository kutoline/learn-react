import { Layout } from "../Layout/Layout";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { ThemeContextProvider } from "../../components/ThemeContext/ThemeContext";
import { AuthContextProvider } from "../AuthContext/AuthContext";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <RestaurantsList/>
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

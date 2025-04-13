import { Layout } from "../Layout/Layout";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { restaurants } from "../../../materials/mock";
import { ThemeContextProvider } from "../../components/ThemeContext/ThemeContext";
import { AuthContextProvider } from "../AuthContext/AuthContext";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantsList restaurants={restaurants} />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

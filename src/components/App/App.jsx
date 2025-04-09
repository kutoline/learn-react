import { Layout } from "../Layout/Layout";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { restaurants } from "../../../materials/mock";
import { ThemeContextProvider } from "../../components/ThemeContext/ThemeContext";
import { AufContextProvider } from "../AufContext/AufContext";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AufContextProvider>
        <Layout>
          <RestaurantsList restaurants={restaurants} />
        </Layout>
      </AufContextProvider>
    </ThemeContextProvider>
  );
};

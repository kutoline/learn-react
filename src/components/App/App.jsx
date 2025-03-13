import { Layout } from "../Layout/Layout";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { restaurants } from "../../../materials/mock";

export const App = () => {
  return (
    <Layout>
      <RestaurantsList restaurants={restaurants} />
    </Layout>
  );
};

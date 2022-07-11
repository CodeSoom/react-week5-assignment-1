import CategoriesContainer from './container/CategoriesContainer';
import RegionsContainer from './container/RegionsContainer';
import RestaurantsContainer from './container/RestaurantsContainer';

export default function App() {
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}

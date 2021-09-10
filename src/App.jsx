import RestaurantsContainer from './container/RestaurantsContainer';
import CategoriesContainer from './container/CategoriesContainer';
import RegionsContainer from './container/RegionsContainer';

export default function App() {
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}

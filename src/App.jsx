import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';
import LocationsContainer from './components/LocationsContainer/LocationsContainer';
import RestaurantsContainer from './components/RestaurantsContainer/RestaurantsContainer';

export default function App() {
  return (
    <main>
      <LocationsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </main>
  );
}

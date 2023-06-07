import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <>
      <h1>Restaurants</h1>
      <RegionContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}

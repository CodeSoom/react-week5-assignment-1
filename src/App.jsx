import { useDispatch, useSelector } from 'react-redux';

import { setCurrentRegionId, setCurrentCategoryId } from './actions';

import Categories from './Categories';
import Regions from './Regions';
import Restaurants from './Restaurants';

export default function App() {
  const dispatch = useDispatch();
  const {
    regions, categories, restaurants, currentRegionId, currentCategoryId,
  } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
    currentRegionId: state.currentRegionId,
    currentCategoryId: state.currentCategoryId,
  }));

  const handleClickRegion = (id) => {
    dispatch(setCurrentRegionId(id));
  };

  const handleClickCategory = (id) => {
    dispatch(setCurrentCategoryId(id));
  };

  return (
    <div>
      <Regions
        regions={regions}
        currentRegionId={currentRegionId}
        onClick={handleClickRegion}
      />
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        onClick={handleClickCategory}
      />
      <Restaurants
        restaurants={restaurants}
        currentCategoryId={currentCategoryId}
        currentRegionId={currentRegionId}
      />
    </div>
  );
}

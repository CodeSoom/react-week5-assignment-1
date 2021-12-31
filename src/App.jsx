import { useEffect } from "react";

import Regions from "./Regions";
import Categories from "./Categories";

import { useDispatch, useSelector } from "react-redux";
import { loadInitialState, changeRegion, changeCategory } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const { currentRegion, currentCategory, regions, categories } = useSelector(
    (state) => ({
      currentRegion: state.currentRegion,
      currentCategory: state.currentCategory,
      regions: state.Regions,
      categories: state.Categories,
    })
  );

  function handleRegionClick(name) {
    dispatch(changeRegion(name));
  }

  function handleCategoryClick(id) {
    dispatch(changeCategory(id));
  }

  useEffect(() => {
    dispatch(loadInitialState());
  }, []);

  return (
    <>
      <Regions
        currentRegion={currentRegion}
        restaurantRegions={regions}
        onClick={handleRegionClick}
      />
      <Categories
        currentCategory={currentCategory}
        restaurantCategories={categories}
        onClick={handleCategoryClick}
      />
    </>
  );
}

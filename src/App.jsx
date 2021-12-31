import { useEffect, useRef } from "react";

import Regions from "./Regions";
import Categories from "./Categories";
import Restaurants from "./Restaurants";

import { useDispatch, useSelector } from "react-redux";
import {
  loadInitialState,
  changeRegion,
  changeCategory,
  getRestaurants,
} from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const { currentRegion, currentCategory, regions, categories, restaurants } =
    useSelector((state) => ({
      currentRegion: state.currentRegion,
      currentCategory: state.currentCategory,
      regions: state.Regions,
      categories: state.Categories,
      restaurants: state.Restaurants,
    }));

  function handleRegionClick(name) {
    dispatch(changeRegion(name));
  }

  function handleCategoryClick(id) {
    dispatch(changeCategory(id));
  }

  useEffect(() => {
    dispatch(loadInitialState());
  }, []);

  useEffect(() => {
    if (currentRegion && currentCategory) {
      dispatch(getRestaurants(currentRegion, currentCategory));
    }
  }, [currentRegion, currentCategory]);

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
      <Restaurants restaurants={restaurants} />
    </>
  );
}

import { useEffect } from "react";

import Regions from "./Regions";
import Categories from "./Categories";

import { useDispatch, useSelector } from "react-redux";
import { loadInitialState, changeRegion } from "./actions";

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
  console.log("반복?");
  console.log(currentRegion, regions);
  function handleRegionClick(id) {
    dispatch(changeRegion(id));
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
      <br />
      <Categories restaurantCategories={categories} />
    </>
  );
}

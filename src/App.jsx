import store from "store";

import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Regions from "./Regions";
import Categories from "./Categories";

import { loadInitialState, changeRegion } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const { regions, categories } = useSelector((state) => ({
    regions: state.Regions,
    categories: state.Categories,
  }));

  function handleRegionClick(id) {
    dispatch(changeRegion(id));
  }

  useEffect(() => {
    dispatch(loadInitialState());
  }, []);

  return (
    <>
      <Provider store={store}>
        <Regions
          currentRegion={regions}
          restaurantRegions={regions}
          onClick={handleRegionClick}
        />
        <Categories restaurantCategories={categories} />
      </Provider>
    </>
  );
}

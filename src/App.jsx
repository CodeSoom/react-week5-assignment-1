import store from "store";

import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Regions from "./Regions";
import Categories from "./Categories";

import { loadInitialState } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const { regions, categories } = useSelector((state) => ({
    regions: state.Regions,
    categories: state.Categories,
  }));

  useEffect(() => {
    dispatch(loadInitialState());
  }, []);

  return (
    <>
      <Provider store={store}>
        <Regions restaurantRegions={regions} />
        <Categories restaurantCategories={categories} />
      </Provider>
    </>
  );
}

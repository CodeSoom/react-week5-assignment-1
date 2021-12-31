import { Provider } from "react-redux";
import store from "store";

import Regions from "./Regions";
import Categories from "./Categories";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Provider store={store}>
        <Regions />
        <Categories />
      </Provider>
    </>
  );
}

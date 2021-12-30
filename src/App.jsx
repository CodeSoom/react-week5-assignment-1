import { Provider } from "react-redux";
import store from "store";

import Regions from "./Regions";
import Categories from "./Categories";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Regions />
        <Categories />
      </Provider>
    </>
  );
}

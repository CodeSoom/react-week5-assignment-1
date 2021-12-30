import { createStore } from "redux";

import reduce from "./reduce";

const store = createStore(reduce);

export default store;

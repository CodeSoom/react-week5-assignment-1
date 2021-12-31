import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;

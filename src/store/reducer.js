import reducers from './reducerHandler';

const initailState = {

};

export default function reducer(state = initailState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}

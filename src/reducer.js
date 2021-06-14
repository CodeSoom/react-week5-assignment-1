export const initialState = {
  restaurants: [],
  categories: [],
};
export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    return null;
  }

  return state;
}

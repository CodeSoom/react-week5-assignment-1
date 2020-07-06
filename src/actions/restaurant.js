/**
 * Action Types
 */
export const UPDATE_RESTAURANT_PROPERTY = Symbol('updateRestaurantProperty');
export const ADD_RESTAURANT = Symbol('addRestaurant');

/**
 * Actions
 */
export function updateRestaurantProperty(propertyName, propertyValue) {
  return {
    type: UPDATE_RESTAURANT_PROPERTY,
    payload: { propertyName, propertyValue },
  };
}
export function addRestaurant() {
  return {
    type: ADD_RESTAURANT,
  };
}

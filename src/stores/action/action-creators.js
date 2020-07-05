import { UPDATE_RESTAURANT_PROPERTY, ADD_RESTAURANT } from './action-types';

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

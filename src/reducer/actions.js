import { getCategories, getRegions, getRestaurants } from '../services/api';
import SelectableItem from '../model/SelectableItem';

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: { locations: locations.map((item) => new SelectableItem(item)) },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories: categories.map((item) => new SelectableItem(item)) },
  };
}

export function setCategory(category) {
  return {
    type: 'setCategory',
    payload: { category },
  };
}

export function setLocation(location) {
  return {
    type: 'setLocation',
    payload: { location },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    const categories = await getCategories();
    dispatch(setCategories(categories));
  };
}

export function fetchLocations() {
  return async (dispatch) => {
    const regions = await getRegions();
    dispatch(setLocations(regions));
  };
}

export function fetchRestaurants({ location, category }) {
  return async (dispatch) => {
    const restaurants = await getRestaurants({
      region: location.name,
      category: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

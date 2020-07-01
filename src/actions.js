import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';
import check from './utils';

const setRegions = (regions) => ({
  type: 'setRegions',
  payload: { regions },
});

const setCategories = (categories) => ({
  type: 'setCategories',
  payload: { categories },
});

const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: { restaurants },
});

const checkRegion = (id) => ({
  type: 'checkRegion',
  payload: { id },
});

const checkCategory = (id) => ({
  type: 'checkCategory',
  payload: { id },
});

const updateRegions = (id) => (dispatch, getState) => {
  const { regions } = getState();
  const checkedRegions = regions.map((region) => check(region, id));
  dispatch(setRegions(checkedRegions));
  dispatch(checkRegion(id));
  dispatch(setRestaurants([]));
};

const getRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

const getCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

const getRestaurantsFromServer = async ({
  regions, categories, regionId, categoryId,
}) => {
  const region = regions.find((r) => r.id === regionId);
  const category = categories.find((c) => c.id === categoryId);
  const restaurants = await fetchRestaurants({
    id: region.id,
    name: region.name.replace('(v)', ''),
  }, category);
  return restaurants;
};

const getRestaurants = () => async (dispatch, getState) => {
  const { regions, categories, checked: { regionId, categoryId } } = getState();
  const restaurants = await getRestaurantsFromServer({
    regions, categories, regionId, categoryId,
  });
  dispatch(setRestaurants(restaurants));
};

const updateCategories = (id) => async (dispatch, getState) => {
  const { regions, categories, checked: { regionId } } = getState();
  const checkedCategories = categories.map((category) => check(category, id));
  const restaurants = await getRestaurantsFromServer({
    regions, categories, regionId, categoryId: id,
  });
  dispatch(setCategories(checkedCategories));
  dispatch(checkCategory(id));
  dispatch(setRestaurants(restaurants));
};

export {
  setRegions, setCategories, setRestaurants, checkRegion, checkCategory,
  updateRegions, updateCategories, getRegions, getCategories, getRestaurants,
};

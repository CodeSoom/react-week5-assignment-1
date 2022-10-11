import { useSelector, useDispatch } from 'react-redux';
import {
  fetchLocations,
} from './actions';

import List from './List';

export default function ListContainer() {
  const { locations, categories, restaurants } = useSelector((state) => ({
    locations: state.locations,
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  function handleClickLocation(name) {
    dispatch(fetchLocations(name));
  }

  return (
    <>
      <List hasButton="true" itemTypes={locations} onClick={handleClickLocation} />
      <br />
      <List hasButton="true" itemTypes={categories} />
      <br />
      <List itemTypes={restaurants} />
    </>
  );
}

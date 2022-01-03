import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Restaurants from '../Restaurants/Restaurants';
import { fetchRestaurants } from '../../reducer/actions';

export default function RestaurantsContainer() {
  const { selected, restaurants } = useSelector((store) => ({
    selected: store.selected,
    restaurants: store.restaurants,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected.location && selected.category) {
      dispatch(fetchRestaurants(selected));
    }
  }, [selected.location, selected.category]);

  if (!(selected.location && selected.category)) {
    return '지역과 카테고리를 선택해주세요';
  }

  if (!restaurants?.length) {
    return '레스토랑이 존재하지 않습니다.';
  }

  return (<Restaurants restaurants={restaurants} />);
}

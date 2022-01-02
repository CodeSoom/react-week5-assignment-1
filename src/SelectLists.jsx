import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lists from './Lists';

import {
  loadCategories,
  loadRegions,
  loadRestaurants,
} from './actions';

export default function SelectLists() {
  const dispatch = useDispatch();
  const { categories, regions, restaurants } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  function setSelect(regionName = '미선택', categoryId = 0) {
    return {
      regionName,
      categoryId,
    };
  }

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
    dispatch(loadRestaurants(setSelect()));
  }, []);

  function regionsClick(event) {
    // todo: 재할당 고치기.
    const buttons = document.querySelectorAll('ul')[0].querySelectorAll('button');
    buttons.forEach((button) => {
      button.className = '';
    });
    event.target.className = 'regionCheck';

    const categoryChceck = document.querySelector('.categoryCheck');
    return dispatch(loadRestaurants(setSelect(
      event.target.innerText,
      categoryChceck !== null ? categoryChceck.id : undefined,
    )));
  }

  function categoriesClick(event) {
    const buttons = document.querySelectorAll('ul')[1].querySelectorAll('button');
    buttons.forEach((button) => {
      button.className = '';
    });
    event.target.className = 'categoryCheck';

    const regionCheck = document.querySelector('.regionCheck');
    return dispatch(loadRestaurants(setSelect(
      regionCheck !== null ? regionCheck.innerText : undefined,
      event.target.id,
    )));
  }

  return (
    <div>
      <Lists items={regions} onClick={regionsClick} />
      <Lists items={categories} onClick={categoriesClick} />
      <Lists items={restaurants} />
    </div>
  );
}

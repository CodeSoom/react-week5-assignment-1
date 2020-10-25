import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <ul>
      {
        regions.map((item) => (
          <li key={item.id}>
            <button type="button">{item.name}</button>
          </li>
        ))
      }
    </ul>
  );
}

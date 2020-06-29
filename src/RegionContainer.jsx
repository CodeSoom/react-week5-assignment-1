import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Region from './Region';

import { selectRegion } from './actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => state);

  const onClick = (region) => {
    dispatch(selectRegion(region));
  };

  return <Region regions={regions} onClick={onClick} />;
}

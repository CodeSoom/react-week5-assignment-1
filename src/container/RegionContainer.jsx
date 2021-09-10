import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateField, loadRegions } from '../store/reducer';

import RegionList from '../presentational/RegionList';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => state);

  const handleClick = ({ field, value }) => {
    dispatch(updateField({ field, value }));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <RegionList
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}

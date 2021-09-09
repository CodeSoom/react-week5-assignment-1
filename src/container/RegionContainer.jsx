import { useDispatch, useSelector } from 'react-redux';

import { updateField } from '../store/actions';

import RegionList from '../presentational/RegionList';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => state);

  const handleClick = ({ field, value }) => {
    dispatch(updateField({ field, value }));
  };

  return (
    <RegionList
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}

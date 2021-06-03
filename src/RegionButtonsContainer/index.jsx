import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../actions';

import Buttons from '../Buttons';

export default function RegionButtonsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const selected = useSelector((state) => state.search.regions);

  function handleClickChangeSearch({ value }) {
    dispatch(changeSearch({
      search: 'region',
      value,
    }));
  }

  return (
    <Buttons
      values={regions}
      selected={selected}
      onClickChangeSearch={handleClickChangeSearch}
    />
  );
}

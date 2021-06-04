import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../../actions';
import Buttons from '../../presentational/Buttons';

export default function RegionButtonsContainer() {
  const dispatch = useDispatch();

  const { regions, selected } = useSelector((state) => ({
    regions: state.regions,
    selected: state.search.region,
  }));

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

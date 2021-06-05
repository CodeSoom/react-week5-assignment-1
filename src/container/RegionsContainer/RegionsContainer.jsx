import { useDispatch, useSelector } from 'react-redux';

import { changeSearch, loadRestaurants } from '../../actions';
import Buttons from '../../presentational/Buttons';

export default function RegionsContainer() {
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

    dispatch(loadRestaurants());
  }

  return (
    <Buttons
      values={regions}
      selected={selected}
      onClickChangeSearch={handleClickChangeSearch}
    />
  );
}

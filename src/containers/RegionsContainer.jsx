import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants, selectRegion } from '../actions';
import { get } from '../utils/utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => handleClick(id)}>
            {name}
            {selectRegion && id === selectedRegion ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}

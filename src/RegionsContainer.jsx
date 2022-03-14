import { useSelector, useDispatch } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './actions';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClickButton(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClickButton(region.id)}
          >
            {region.name}
            <>
              {selectedRegion && (
                region.id === selectedRegion.id ? '(V)' : null
              )}
            </>
          </button>
        </li>
      ))}
    </ul>
  );
}

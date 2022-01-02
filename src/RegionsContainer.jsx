import { useSelector, useDispatch } from 'react-redux';

import {
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));
  const dispatch = useDispatch();

  function handleClickButton(regionId) {
    dispatch(selectRegion(regionId));
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

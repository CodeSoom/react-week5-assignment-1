import { useDispatch, useSelector } from 'react-redux';
import { changeRegion } from './store/actions';

export default function RegionListContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selected.regionId,
  }));

  function handleClick(id) {
    dispatch(changeRegion(id));
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" id={id} onClick={() => handleClick(id)}>
            {`${name}${id === selectedRegionId ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}

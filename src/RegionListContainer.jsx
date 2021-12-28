import { useDispatch, useSelector } from 'react-redux';
import { changeRegion } from './store/actions';
import Item from './Item';

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
      {regions.map((region) => (
        <Item
          key={region.id}
          item={region}
          onClick={() => handleClick(region.id)}
          selectedId={selectedRegionId}
        />
      ))}
    </ul>
  );
}

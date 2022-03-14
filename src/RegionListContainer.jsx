import { useDispatch, useSelector } from 'react-redux';

import { changeRegion } from './store/actions';
import Item from './Item';

export default function RegionListContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionName } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionName: state.selected.regionName,
  }));

  function handleClick(id) {
    dispatch(changeRegion(id));
  }

  if (!regions || !regions.length) {
    return <>지역 목록이 비어있습니다.</>;
  }

  return (
    <ul>
      {regions.map((region) => (
        <Item
          key={region.id}
          item={region}
          onClick={() => handleClick(region.name)}
          selected={selectedRegionName === region.name}
        />
      ))}
    </ul>
  );
}

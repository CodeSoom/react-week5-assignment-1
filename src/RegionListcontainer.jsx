import { useSelector } from 'react-redux';

import Region from './Region';

export default function RegionListContainer() {
  const { regionList } = useSelector((state) => ({
    regionList: state.regionList,
  }));

  return (
    <Region
      regionList={regionList}
      onclickRegion={onclickRegion}
    />
  );
}

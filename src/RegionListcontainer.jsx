import { useSelector } from 'react-redux';

import Region from './Region';

export default function RegionListContainer() {
  // TODO : 테스트후 구현
  const { regionList } = useSelector((state) => ({
    regionList: state.regionList,
  }));

  return (
    <Region regionList={regionList} />
  );
}

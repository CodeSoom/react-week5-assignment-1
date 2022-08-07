import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, currentContent } = useSelector((state) => ({
    regions: state.regions,
    currentContent: state.currentContent.region,
  }));

  return (
    <>
      <Regions regions={regions} currentContent={currentContent} />
    </>
  );
}

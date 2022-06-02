import Buttons from './Buttons';

export default function Regions({ regions, currentRegionId, onClick }) {
  return (
    <Buttons
      items={regions}
      name="currentRegionId"
      currentId={currentRegionId}
      onClick={onClick}
    />
  );
}

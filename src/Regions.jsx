import Buttons from './Buttons';

export default function Regions({ state, onClick }) {
  return (
    <Buttons
      items={state.regions}
      name="currentRegionId"
      currentId={state.currentRegionId}
      onClick={onClick}
    />
  );
}

import { useSelector } from 'react-redux';

export default function Regions({ regions, onClick }) {
  const { selectedRegion } = useSelector((state) => ({ selectedRegion: state.selectedRegion }));
  return (
    <ul>
      {regions.map((region) => (<li key={region.id}><button type="button" onClick={() => onClick(region.name)}>{selectedRegion === region.name ? `${region.name}(V)` : region.name}</button></li>))}
    </ul>
  );
}

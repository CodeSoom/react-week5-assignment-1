import ButtonGroup from '../ButtonGroup/ButtonGroup';

export default function Locations({ locations, onClick }) {
  return (
    <ButtonGroup
      onClick={(item) => onClick(item)}
      items={locations}
      key={(item) => item.id}
      render={(item) => item.name}
    />
  );
}

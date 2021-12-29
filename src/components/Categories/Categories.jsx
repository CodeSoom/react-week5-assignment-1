import ButtonGroup from '../ButtonGroup/ButtonGroup';

export default function Categories({ categories, onClick }) {
  return (
    <ButtonGroup
      onClick={(item) => onClick(item)}
      items={categories}
      keyOfItem={(item) => item.id}
      render={(item) => item.name}
    />
  );
}

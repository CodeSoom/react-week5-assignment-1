import Button from '../Button';

export default function Buttons({
  values,
  selected,
  onClickChangeSearch,
}) {
  return (
    <ul>
      {values.map(({ id, name }) => (
        <Button
          key={id}
          name={name}
          onClick={onClickChangeSearch}
          selected={selected}
        />
      ))}
    </ul>
  );
}

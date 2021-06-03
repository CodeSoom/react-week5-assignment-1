import ButtonContainer from '../ButtonContainer';

export default function Buttons({ values, search }) {
  return (
    <ul>
      {values.map(({ id, name }) => (
        <ButtonContainer
          key={id}
          name={name}
          search={search}
        />
      ))}
    </ul>
  );
}

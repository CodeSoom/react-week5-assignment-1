import ButtonContainer from '../ButtonContainer';

export default function Buttons({ options, search }) {
  return (
    <ul>
      {options.map(({ id, name }) => (
        <ButtonContainer
          key={id}
          name={name}
          search={search}
        />
      ))}
    </ul>
  );
}

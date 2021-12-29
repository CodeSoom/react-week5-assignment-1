import Button from './Button'

export default function ButtonContainer({ regions }) {
  function clickHandler(event) {
    // children 요소를 리턴.
  }

  return (
    <ul>
    { regions.map((region) => (
      <li key={region.id}>
        <Button onClick={clickHandler}>
          {region.name}
        </Button>
      </li>
    ))}
    </ul>
  );
}
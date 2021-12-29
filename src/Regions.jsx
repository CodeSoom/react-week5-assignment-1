export default function Regions({ regions }) {
  if (!regions.length) {
    return null;
  }

  return (
    <>
      {regions.map(({ id, name }) => (
        <button key={id} type="button">
          {name}
        </button>
      ))}
    </>
  );
}

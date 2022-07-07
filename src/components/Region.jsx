export default function Region({ region, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(region.id)}
    >
      { region.name }
    </button>
  );
}

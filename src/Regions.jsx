export default function Regions({ regions, activeId, onClick }) {
  if (regions.length === 0) {
    return (
      <div>
        지역 정보를 가져오세요.
      </div>
    );
  }

  return (
    <ul>
      {regions.map((region) => {
        const { id, name } = region;

        return (
          <li key={id}>
            <button type="button" onClick={onClick}>
              {name}
              {activeId === id && '(V)'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

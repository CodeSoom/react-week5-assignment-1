// Presentational Components: 레스토랑 목록을 추가해준다.
export default function ListCreator({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}

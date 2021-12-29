// Presentational Components: 레스토랑 목록을 추가해준다.
export default function ListCreator({ restaurant, onClick }) {
  return (
    <div>
      <input
        value={restaurant.name}
        name="name"
        type="text"
        placeholder="이름"
      />
      <input
        value={restaurant.category}
        name="category"
        type="text"
        placeholder="분류"
      />
      <input
        value={restaurant.place}
        name="place"
        type="text"
        placeholder="주소"
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}

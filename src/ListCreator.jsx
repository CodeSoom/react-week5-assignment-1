// Presentational Components: 레스토랑 목록을 추가해준다.
export default function ListCreator({ restaurant, onClick }) {
  function handleChange(event) {
    const { target: { value } } = event;
  }

  return (
    <div>
      <input
        value={restaurant.name}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="이름"
      />
      <input
        value={restaurant.category}
        onChange={handleChange}
        name="category"
        type="text"
        placeholder="분류"
      />
      <input
        value={restaurant.place}
        onChange={handleChange}
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

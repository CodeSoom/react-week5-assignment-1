export default function RetaurantForm({ restaurant, onClick, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        value={restaurant.category}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        value={restaurant.address}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}

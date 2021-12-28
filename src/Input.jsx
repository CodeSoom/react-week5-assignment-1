export default function Input({
  nameValue, categoryValue, placeValue,
  onChange, onClick,
}) {
  return (
    <div>
      <input onChange={onChange} value={nameValue} type="text" placeholder="이름" />
      <input onChange={onChange} value={categoryValue} type="text" placeholder="분류" />
      <input onChange={onChange} value={placeValue} type="text" placeholder="주소" />
      <button onClick={onClick} type="button">
        등록
      </button>
    </div>
  );
}

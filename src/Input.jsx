export default function Input({ value, onChange, onClick }) {
  return (
    <div>
      <input onChange={onChange} value={value} type="text" placeholder="이름" />
      <input onChange={onChange} value={value} type="text" placeholder="분류" />
      <input onChange={onChange} value={value} type="text" placeholder="주소" />
      <button onClick={onClick} type="button">
        등록
      </button>
    </div>
  );
}

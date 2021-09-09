export default function Item({
  data, name, handleClick, checkedElement,
}) {
  function onClickButton() {
    const { name: text, id } = data;
    const value = {
      id,
      text,
    };
    handleClick(name, value);
  }

  return (
    <li>
      <button name={name} type="button" onClick={onClickButton}>
        {checkedElement.id === data.id ? `${data.name}(V)` : data.name}
      </button>
    </li>
  );
}

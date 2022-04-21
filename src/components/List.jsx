export default function List({
  buttonList, currentButtonInfo, onButtonClick, value,
  emptyMessage,
}) {
  if (!buttonList || buttonList.length === 0) {
    return <>{emptyMessage || '정보가 없어요!'}</>;
  }

  return (
    <ul>
      {buttonList.map((button) => (
        <li key={button.id}>
          <button type="button" onClick={() => onButtonClick({ value: button[value] })}>
            {button.name}
            {currentButtonInfo === button[value] ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}

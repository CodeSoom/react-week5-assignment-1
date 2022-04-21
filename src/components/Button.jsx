export default function Button({
  button,
  currentButtonInfo,
  onButtonClick,
  value,
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onButtonClick({ value: button[value] })}
      >
        {button.name}
        {currentButtonInfo === button[value] ? '(V)' : null}
      </button>
    </li>
  );
}

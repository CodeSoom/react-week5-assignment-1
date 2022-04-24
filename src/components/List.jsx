import Button from './Button';

export default function List({
  buttonList, currentButtonInfo, onButtonClick, value,
  emptyMessage,
}) {
  if (!buttonList || buttonList.length === 0) {
    return <div>{emptyMessage || '정보가 없어요!'}</div>;
  }

  return (
    <ul>
      {buttonList.map((button) => (
        <Button
          key={button.id}
          name={button.name}
          isSelected={() => button[value] === currentButtonInfo}
          onButtonClick={onButtonClick}
          value={button[value]}
        />
      ))}
    </ul>
  );
}

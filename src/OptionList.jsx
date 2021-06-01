import useSelectedOption from './hooks/useSelectedOption';

export default function OptionList({ options, optionType }) {
  const { selected, setSelected } = useSelectedOption(optionType);

  return (
    <ul>
      {options.map((option) => {
        const name = (selected === option) ? `${option}(V)` : option;

        return (
          <li key={option}>
            <button type="button" onClick={() => setSelected(option)}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

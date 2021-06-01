import useSelected from './hooks/useSelected';

export default function OptionList({ options, optionType }) {
  const { selected, setSelected } = useSelected(optionType);

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

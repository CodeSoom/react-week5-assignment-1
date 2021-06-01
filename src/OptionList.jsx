import useSelected from './hooks/useSelected';

export default function OptionList({ options, mode }) {
  const { selected, setSelected } = useSelected(mode);

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

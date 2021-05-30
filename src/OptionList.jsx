export default function OptionList({ options }) {
  return (
    <ul>
      {options.map((option, i) => (
        <li key={i}>
          <button type="button">
            {option}
          </button>

        </li>
      ))}
    </ul>
  );
}

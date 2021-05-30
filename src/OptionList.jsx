export default function OptionList({ options }) {
  return (
    <ul>
      {options.map((option, i) => (
        <li key={i}>
          {option}
        </li>
      ))}
    </ul>
  );
}

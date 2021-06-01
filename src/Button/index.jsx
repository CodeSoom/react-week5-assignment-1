export default function Button({ content, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(content)}
      >
        {content}

      </button>
    </li>
  );
}

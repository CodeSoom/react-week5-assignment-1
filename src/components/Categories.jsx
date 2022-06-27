import EMPTY_MESSAGES from '../../constants/emptyMessages';

import Button from './Button';

export default function Categories({
  categories, errorMessage, selectedId, onClick,
}) {
  if (!categories?.length) {
    return errorMessage ?? EMPTY_MESSAGES.CATEGORY;
  }

  return (
    <div>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Button
              active={selectedId === id}
              onClick={() => onClick(id)}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

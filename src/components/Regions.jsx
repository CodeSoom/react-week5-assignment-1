import EMPTY_MESSAGES from '../../constants/emptyMessages';

import Button from './Button';

export default function Regions({
  regions, selectedRegion, errorMessage, onClick,
}) {
  if (!regions?.length) {
    return <div>{errorMessage ?? EMPTY_MESSAGES.REGION}</div>;
  }

  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <Button
              active={selectedRegion === name}
              onClick={() => onClick(name)}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

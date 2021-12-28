import { useSelector } from 'react-redux';

import List from './List';

function selector(state) {
  return {
    restaurants: state.restaurants,
  };
}

export default function ListContainer() {
  const { restaurants } = useSelector(selector);

  return (
    <div>
      <List
        restaurants={restaurants}
      />
    </div>
  );
}

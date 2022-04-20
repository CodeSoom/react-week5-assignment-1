import { render } from '@testing-library/react';

import List from './List';

import locations from '../fixtures/locations';

describe('List', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a list of items', () => {
    const { queryByText } = render((
      <List
        items={locations}
        selectedItemId=""
        onClick={handleClick}
      />
    ));

    expect(queryByText('서울')).not.toBeNull();
  });
});

import { fireEvent, render } from '@testing-library/react';

import List from './List';

import locations from '../fixtures/locations';

describe('List', () => {
  const handleClick = jest.fn();

  function renderList() {
    return render((
      <List
        items={locations}
        selectedItemId=""
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a list of items', () => {
    const { queryByText } = renderList();

    expect(queryByText('서울')).not.toBeNull();
  });

  it('calls handleClick', () => {
    const { getByText } = renderList();

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});

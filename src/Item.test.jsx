import { fireEvent, render } from '@testing-library/react';

import Item from './Item';

import locations from '../fixtures/locations';

describe('Item', () => {
  const handleClick = jest.fn();

  function renderItem({ selectedItemId }) {
    return render((
      <Item
        item={locations[0]}
        selectedItemId={selectedItemId}
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders an item', () => {
    const { queryByText } = renderItem({ selectedItemId: '' });

    expect(queryByText('서울')).not.toBeNull();
  });

  it('calls handleClick', () => {
    const { getByText } = renderItem({ selectedItemId: '' });

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });

  context('when the item is selected', () => {
    it('renders with mark', () => {
      const { queryByText } = renderItem({ selectedItemId: 1 });

      expect(queryByText('서울(V)')).not.toBeNull();
    });
  });

  context('when the item is not selected', () => {
    it('renders without mark', () => {
      const { queryByText } = renderItem({ selectedItemId: '' });

      expect(queryByText('서울(V)')).toBeNull();
    });
  });
});

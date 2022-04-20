import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  function renderItem() {
    return render((
      <Item
        label="서울"
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders an item', () => {
    const { queryByText } = renderItem();

    expect(queryByText('서울')).not.toBeNull();
  });

  it('calls handleClick', () => {
    const { getByText } = renderItem();

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});

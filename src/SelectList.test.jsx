import { fireEvent, render } from '@testing-library/react';

import List from './List';

import categories from '../fixture/categories';

describe('SelectList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onSelect = jest.fn();

  const renderSelectList = (selectCategoryId) => render((
    <List
      list={categories}
      onSelect={onSelect}
      selectedId={selectCategoryId}
    />
  ));

  it('renders SelectList', () => {
    const { container } = renderSelectList();

    expect(container).toHaveTextContent('한식');
  });

  it('listens for click event on select item', () => {
    const { getByText } = renderSelectList();

    fireEvent.click(getByText('한식'));

    expect(onSelect).toBeCalledWith(1);
  });

  context('when selected category', () => {
    it('renders name with (V)', () => {
      const { queryByText } = renderSelectList(1);

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });
});

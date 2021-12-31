import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import Item from './Item';

describe('Item', () => {
  const value = {
    id: 1,
    name: '서울',
  };

  given('selected', () => false);

  const handleClick = jest.fn();

  const renderComponent = () => render(
    <Item
      value={value}
      selected={given.selected}
      onClick={handleClick}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders button', () => {
    const { getByRole } = renderComponent();

    expect(getByRole('button', { name: value.name })).toBeInTheDocument();
  });

  context('when unselected', () => {
    given('selected', () => false);

    it('clicks button, calls handleClick hanlder', () => {
      const { getByRole } = renderComponent();

      fireEvent.click(getByRole('button', { name: value.name }));

      expect(handleClick).toBeCalledWith(value);
    });
  });

  context('when selected', () => {
    given('selected', () => true);

    it('selected button, render button with name and (V)', () => {
      const { getByRole } = renderComponent();

      expect(getByRole('button', { name: `${value.name}(V)` })).toBeInTheDocument();
    });
  });
});

import { fireEvent, render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const value = {
    id: 1,
    name: '서울',
  };

  const renderComponent = (selected) => render(
    <Item
      value={value}
      selected={selected}
      onClick={handleClick}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders button', () => {
    const { getByRole } = renderComponent(false);

    expect(getByRole('button', { name: value.name })).toBeInTheDocument();
  });

  it('clicks button, calls handleClick hanlder', () => {
    const { getByRole } = renderComponent(false);

    fireEvent.click(getByRole('button', { name: value.name }));

    expect(handleClick).toBeCalledWith(value);
  });

  it('selected button, render button with name and (V)', () => {
    const { getByRole } = renderComponent(true);

    expect(getByRole('button', { name: `${value.name}(V)` })).toBeInTheDocument();
  });
});

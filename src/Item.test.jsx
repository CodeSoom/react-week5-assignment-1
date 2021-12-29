import { fireEvent, render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const renderComponent = ({ name, selected }) => render(
    <Item
      name={name}
      selected={selected}
      onClick={handleClick}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders button', () => {
    const { getByRole } = renderComponent({ name: '서울', selected: false });

    expect(getByRole('button', { name: '서울' })).toBeInTheDocument();
  });

  it('clicks button, calls handleClick hanlder', () => {
    const { getByRole } = renderComponent({ name: '서울', selected: false });

    fireEvent.click(getByRole('button', { name: '서울' }));

    expect(handleClick).toBeCalledWith('서울');
  });

  it('selected button, render button with name and V', () => {
    const { getByRole } = renderComponent({ name: '서울', selected: true });

    expect(getByRole('button', { name: '서울 V' })).toBeInTheDocument();
  });
});

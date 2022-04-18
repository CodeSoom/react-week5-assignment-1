import { fireEvent, render } from '@testing-library/react';

import Addresses from './Addresses';

import addresses from '../fixture/addresses';

describe('Addresses', () => {
  const onSelect = jest.fn();

  const renderAddresses = () => render((
    <Addresses
      addresses={addresses}
      onSelect={onSelect}
    />
  ));

  it('renders Addresses', () => {
    const { container } = renderAddresses();

    expect(container).toHaveTextContent('서울');
  });

  it('listens for click event on select category', () => {
    const { getByText } = renderAddresses();

    fireEvent.click(getByText('서울'));

    expect(onSelect).toBeCalledWith(1);
  });

  // TODO: selected address
  // context('when selected', () => {
  //   it('renders name with (V)', () => {
  //     const { queryByText } = renderAddresses(1);

  //     expect(queryByText('한식 (V)')).not.toBeNull();
  //   });
  // });
});

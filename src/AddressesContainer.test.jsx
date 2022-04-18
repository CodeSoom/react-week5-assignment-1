import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import AddressesContainer from './AddressesContainer';

import addresses from '../fixture/addresses';

describe('AddressesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    addresses,
  }));

  it('renders categories', () => {
    const { container } = render((
      <AddressesContainer />
    ));

    expect(container).toHaveTextContent('서울');
  });

  it('listens for click event on select category', () => {
    const { getByText } = render((
      <AddressesContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selectAddress',
      payload: {
        selectAddressId: 1,
      },
    });
  });

  context('when selected', () => {
    it('renders category name with (V)', () => {
      useSelector.mockImplementationOnce((selector) => selector({
        selectAddressId: 1,
        addresses,
      }));

      const { queryByText } = render((
        <AddressesContainer />
      ));

      expect(queryByText('서울 (V)')).not.toBeNull();
    });
  });
});

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixture/regions';

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('renders regions', () => {
    const { container } = render((
      <RegionsContainer />
    ));

    expect(container).toHaveTextContent('서울');
  });

  it('listens for click event on select region', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: {
        selectRegionId: 1,
      },
    });
  });

  context('when selected', () => {
    it('renders region name with (V)', () => {
      useSelector.mockImplementationOnce((selector) => selector({
        selectRegionId: 1,
        regions,
      }));

      const { queryByText } = render((
        <RegionsContainer />
      ));

      expect(queryByText('서울 (V)')).not.toBeNull();
    });
  });
});

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';
import RegionsContainer from './RegionsContainer';

import regions from '../fixture/regions';

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    given('selector', () => ({
      regions,
    }));
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector(given.selector));

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

  context('when selected region', () => {
    it('renders region name with (V)', () => {
      given('selector', () => ({
        selectRegionId: 1,
        regions,
      }));

      const { queryByText } = render((
        <RegionsContainer />
      ));

      expect(queryByText('서울(V)')).not.toBeNull();
    });
  });
});

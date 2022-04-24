import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';
import 'given2/setup';

import regions from '../fixtures/regions';

import { updateRegionName } from '../redux/actions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  given('regions', () => regions);

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRegionsContainer() {
    return render(<RegionsContainer />);
  }

  context('with regions', () => {
    it('renders regions', () => {
      given('regions', () => regions);

      const { queryByText } = renderRegionsContainer();

      expect(queryByText(/서울/)).not.toBeNull();
    });

    it('updates region when button clicked', () => {
      given('regions', () => regions);

      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(updateRegionName({ regionName: '서울' }));
    });
  });

  context('without regions', () => {
    it('renders "지역이 없어요!"', () => {
      given('regions', () => []);

      const { container } = renderRegionsContainer();
      expect(container).toHaveTextContent(/지역이 없어요!/);
    });
  });
});

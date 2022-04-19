import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';
import 'given2/setup';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  given('regions', () => [{
    id: 1,
    name: '서울',
  }]);

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
      given('regions', () => [{
        id: 1,
        name: '서울',
      }]);
      const { queryByText } = renderRegionsContainer();

      expect(queryByText(/서울/)).not.toBeNull();
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

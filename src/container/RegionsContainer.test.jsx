import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { getRegions } from '../store/async-actions';

import regions from '../fixtures/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('../store/async-actions');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  function renderRegionsContainer() {
    return render(
      <RegionsContainer />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getRegions를 dispatch합니다.', () => {
    const { container } = renderRegionsContainer();

    expect(dispatch).toHaveBeenCalledWith(getRegions());

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});

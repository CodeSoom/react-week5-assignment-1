import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { getRegions } from '../store/async-actions';

import regions from '../fixtures/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

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

  it('regions API를 호출합니다.', () => {
    const { container } = renderRegionsContainer();

    expect(dispatch).toHaveBeenCalledWith(getRegions());
    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('지역 목록이 보여집니다.', () => {
    const { container } = renderRegionsContainer();

    expect(container).toHaveTextContent('부산');
    expect(container).toHaveTextContent('대구');
  });
});

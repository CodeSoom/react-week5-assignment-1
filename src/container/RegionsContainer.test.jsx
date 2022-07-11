import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { getRegions } from '../store/async-actions';

import regions from '../fixtures/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('../store/async-actions');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  const selectedRegion = regions[0];

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    selectedRegion,
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

  it('특정 지역을 선택하면 selectRegion이 dispatch와 함께 호출됩니다.', () => {
    const { getByText } = renderRegionsContainer();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalled();
  });
});

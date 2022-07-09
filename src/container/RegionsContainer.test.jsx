import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { getRegions } from '../store/async-actions';

import { selectRegion } from '../store/actions';

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
    const region = regions[0];

    const { getByRole } = renderRegionsContainer();

    fireEvent.click(getByRole('button', { name: region.name }));

    expect(dispatch).toHaveBeenCalledWith(selectRegion());
  });

  it('특정 지역을 선택하면 V가 선택된 지역에 보여집니다.', () => {
    const { getByRole } = renderRegionsContainer();

    expect(getByRole('button'),
      { name: `${selectedRegion.name}(V)` })
      .toBeInTheDocument();
  });
});

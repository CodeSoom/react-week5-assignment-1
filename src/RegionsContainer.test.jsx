import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  function renderRegionsContainer() {
    return render((<RegionsContainer />));
  }

  it('RegionsContainer가 렌더링된다.', () => {
    const { getByText } = renderRegionsContainer();

    expect(getByText('서울')).not.toBeNull();
  });

  it('지역을 클릭하면 dispatch가 호출된다.', () => {
    const { getByText } = renderRegionsContainer();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toHaveBeenCalled();
  });
});

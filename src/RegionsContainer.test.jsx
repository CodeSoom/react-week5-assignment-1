import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent, screen } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  function renderRegionsContainer() {
    return render((<RegionsContainer />));
  }

  it('지역이 랜더링된다', () => {
    renderRegionsContainer();

    expect(screen.getByText(/서울/)).not.toBeNull();
  });

  it('지역을 클릭하면 dispatch가 실행된다', () => {
    renderRegionsContainer();

    fireEvent.click(screen.getByText(/서울/));

    expect(dispatch).toBeCalled();
  });
});

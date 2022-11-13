import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const { getByText } = render((
    <RegionsContainer />
  ));

  it('지역이 랜더링된다', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
    }));

    expect(getByText(/서울/)).not.toBeNull();
  });

  it('', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    fireEvent.click(getByText(/서울/));

    expect(dispatch).toBeCalled();
  });
});

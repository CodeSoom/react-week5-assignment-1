import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../../fixtures/regions';

import { changeRegionName } from '../actions';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('클릭한 버튼과 함께 "changeRegionName"을 dispatch한다', () => {
    const { getByRole } = render(<RegionsContainer />);

    const clickedButton = regions[0];

    fireEvent.click(getByRole('button', { name: clickedButton.name }));

    expect(dispatch).toBeCalledWith(changeRegionName(clickedButton));
  });
});

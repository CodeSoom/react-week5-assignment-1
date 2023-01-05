import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
  }));

  it('지역 리스트를 화면에 렌더한다.', () => {
    render(<RegionsContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  // useSelector.mockImplementation((selector) => selector.regions);

  it('지역 리스트를 화면에 렌더한다.', () => {
    render(<RegionsContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

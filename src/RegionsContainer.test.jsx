import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector);

  it('지역 리스트를 화면에 렌더한다.', () => {
    render(<RegionsContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

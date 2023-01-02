import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector);

  it('returns regions', () => {
    render(<RegionsContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

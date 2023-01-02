import { render, screen } from '@testing-library/react';
import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  context('has list', () => {
    it('returns regions', () => {
      render(<RegionsContainer />);

      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  context('has not list', () => {
    it('returns empty region', () => {
      render(<RegionsContainer />);

      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
  });
});

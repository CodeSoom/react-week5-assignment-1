import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

jest.mock('./services/api');

describe('App', () => {
  context('without click item', () => {
    it('renders categories', async () => {
      await act(async () => render(<App />));

      expect(screen.getByText('한식')).toBeInTheDocument();
      expect(screen.getByText('중식')).toBeInTheDocument();
      expect(screen.getByText('일식')).toBeInTheDocument();
    });

    it('renders regions', async () => {
      await act(async () => render(<App />));

      expect(screen.getByText('서울')).toBeInTheDocument();
      expect(screen.getByText('대전')).toBeInTheDocument();
      expect(screen.getByText('대구')).toBeInTheDocument();
    });
  });

  context('with click item', () => {
    it('renders item with (v)', async () => {
      await act(async () => render(<App />));

      fireEvent.click(screen.getByText('한식'));

      expect(screen.getByText('한식(V)')).toBeInTheDocument();
      expect(screen.getByText('중식')).toBeInTheDocument();

      fireEvent.click(screen.getByText('중식'));

      expect(screen.getByText('한식')).toBeInTheDocument();
      expect(screen.getByText('중식(V)')).toBeInTheDocument();

      fireEvent.click(screen.getByText('서울'));

      expect(screen.getByText('서울(V)')).toBeInTheDocument();
      expect(screen.getByText('대전')).toBeInTheDocument();

      fireEvent.click(screen.getByText('대전'));

      expect(screen.getByText('서울')).toBeInTheDocument();
      expect(screen.getByText('대전(V)')).toBeInTheDocument();
    });
  });
});

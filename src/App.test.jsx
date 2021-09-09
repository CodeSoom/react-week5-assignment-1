import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

jest.mock('./services/api');

describe('App', () => {
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

  it('renders item with (v)', async () => {
    await act(async () => render(<App />));

    fireEvent.click(screen.getByText('한식'));

    await waitFor(() => {
      expect(screen.getByText('한식(V)')).toBeInTheDocument();
      expect(screen.getByText('중식')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('중식'));

    await waitFor(() => {
      expect(screen.getByText('한식')).toBeInTheDocument();
      expect(screen.getByText('중식(V)')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('서울'));

    await waitFor(() => {
      expect(screen.getByText('서울(V)')).toBeInTheDocument();
      expect(screen.getByText('대전')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('대전'));

    await waitFor(() => {
      expect(screen.getByText('서울')).toBeInTheDocument();
      expect(screen.getByText('대전(V)')).toBeInTheDocument();
    });
  });

  it('renders result restaurants', async () => {
    await act(async () => render(<App />));

    fireEvent.click(screen.getByText('서울'));
    fireEvent.click(screen.getByText('한식'));

    await waitFor(() => expect(screen.getByText('양천주가')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('한국식초밥')).toBeInTheDocument());
  });
});

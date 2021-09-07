import { render, screen } from '@testing-library/react';
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
});

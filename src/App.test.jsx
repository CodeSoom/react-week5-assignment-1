import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders categories', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
    expect(container).toHaveTextContent('일식');
  });
});

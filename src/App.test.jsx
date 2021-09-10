import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders cateogries', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
  });
});

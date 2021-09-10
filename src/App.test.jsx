import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders cateogries', () => {
    const { getBytext } = render(<App />);

    expect(getBytext('한식')).not.toBeNull();
    expect(getBytext('중식')).not.toBeNull();
  });
});

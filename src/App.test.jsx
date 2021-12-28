import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders location list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});

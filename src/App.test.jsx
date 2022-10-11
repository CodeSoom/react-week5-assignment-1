import { render } from '@testing-library/react';

import App from "./App";

describe('App', () => {
  it('Shows regions', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
  });

  it('Shows categories', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});

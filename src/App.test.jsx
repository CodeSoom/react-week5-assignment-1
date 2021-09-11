import { render, fireEvent } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {

  it('shows regions as list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  it('shows categories as list', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
  });
})
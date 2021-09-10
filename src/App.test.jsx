import { render, fireEvent } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {

  it('shows regions as buttons', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });
})
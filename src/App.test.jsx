import { render } from "@testing-library/react";

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  test('show region button list', () => {
    const { getByText, getByDisplayValue } = render((
      <App />
    ));

    expect(getByText(/대전/)).not.toBeNull();
    expect(getByDisplayValue('대전')).not.toBeNull();
  });
});

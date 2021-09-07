import { render } from '@testing-library/react';

import { useSelector } from '../__mocks__/react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  const { getByText } = render(<App />);

  expect(getByText('한식')).not.toBeUndefined();
  expect(getByText('서울')).not.toBeUndefined();
});

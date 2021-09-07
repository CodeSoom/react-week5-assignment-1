import { render } from '@testing-library/react';

import { useDispatch, useSelector } from '../__mocks/react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, category: '한식' },
    ],
    regions: [
      { id: 1, region: '서울' },
    ],
  }));

  const { getByText } = render(<App />);

  expect(getByText('한식'));
  expect(getByText('서울'));
});

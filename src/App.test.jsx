import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

it('App', () => {
  const regions = [
    { id: 0, name: '서울' },
    { id: 1, name: '대구' },
    { id: 2, name: '부산' },
  ];

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ regions }));

  const { getByText } = render(<App />);

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대구')).not.toBeNull();
  expect(getByText('부산')).not.toBeNull();
});

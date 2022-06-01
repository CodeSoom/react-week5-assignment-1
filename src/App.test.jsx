import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 0, name: '서울' }],
  }));

  test('화면에 레스트랑 지역 목록이 나온다.', () => {
    const { getByRole, getAllByRole } = render((<App />));

    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('button')[0]).toHaveTextContent('서울');
  });
});

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('화면에 레스트랑 지역 목록이 나온다.', () => {
    const { getByRole, getAllByRole } = render((<App />));

    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('button')[0]).toHaveTextContent('서울');
  });
});

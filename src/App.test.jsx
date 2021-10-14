import {
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';

import App from './App';

const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }, { id: 3, name: '대구' }, { id: 4, name: '부산' }, { id: 5, name: '광주' }, { id: 6, name: '강원도' }, { id: 7, name: '인천' }, { id: 8, name: '제주' }, { id: 9, name: '전주' }, { id: 10, name: '순천' }, { id: 11, name: '독도' }];
const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }, { id: 3, name: '일식' }, { id: 4, name: '양식' }, { id: 5, name: '분식' }, { id: 6, name: '과자' }, { id: 7, name: '치킨' }, { id: 1003, name: '테스트' }, { id: 1034, name: '음료' }, { id: 1036, name: '사탕' }];

describe('App', () => {
  it('renders a loading message', () => {
    const { getByText } = render(<App />);

    expect(getByText('로딩중..'));
  });

  it('renders regions', async () => {
    await act(async () => render(<App />));

    waitFor(() => regions.map((region) => screen.queryByAltText(region.name)));
  });

  it('renders categories', async () => {
    await act(async () => render(<App />));

    waitFor(() => categories.map((category) => screen.queryByAltText(category.name)));
  });
});

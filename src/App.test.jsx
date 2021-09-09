import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

jest.mock('./services/api');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    checkedRegion: {},
    checkedCategory: {},
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대구' },
      { id: 3, name: '부산' },
    ],
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
    ],
    restaurants: [
      { id: 1, name: '김말천국' },
      { id: 2, name: '뚝배기리조또' },
      { id: 3, name: '민트불고기' },
    ],
  }));

  it('지역 목록을 보여준다', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('대구')).toBeInTheDocument();
    expect(getByText('부산')).toBeInTheDocument();
  });

  it('카테고리 목록을 보여준다', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('중식')).toBeInTheDocument();
    expect(getByText('일식')).toBeInTheDocument();
  });

  it('식당 목록을 보여준다', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('김말천국')).toBeInTheDocument();
    expect(getByText('뚝배기리조또')).toBeInTheDocument();
    expect(getByText('민트불고기')).toBeInTheDocument();
  });
});

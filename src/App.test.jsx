import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ],
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
    ],
    selectedRegion: {},
    selectedCategory: {},
    restaurants: [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
      {
        id: 6,
        categoryId: 1,
        name: '한국식초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
    ],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });

  it('renders regions', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });

  it('dispatches selectedCategory', () => {
    const { getByText } = render(<App />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      payload: {
        field: 'selectedCategory',
        value: {
          id: 1,
          name: '한식',
        },
      },
      type: 'UPDATE_FIELD',
    });
  });

  it('dispatches selectedRegion', () => {
    const { getByText } = render(<App />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      payload: {
        field: 'selectedRegion',
        value: {
          id: 1,
          name: '서울',
        },
      },
      type: 'UPDATE_FIELD',
    });
  });

  it('renders result restaurants', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('한국식초밥');
  });
});

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    selectedRegion: {},
    selectedCategory: {},
    restaurants: [],
  }));

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

  it('renders item with (v)', () => {
    const { container, getByText } = render(<App />);

    fireEvent.click(getByText('한식'));

    expect(container).toHaveTextContent('한식(V)');
    expect(container).toHaveTextContent('중식');

    fireEvent.click(getByText('중식'));

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식(V)');

    fireEvent.click(getByText('서울'));

    expect(container).toHaveTextContent('서울(V)');
    expect(container).toHaveTextContent('대전');

    fireEvent.click(getByText('대전'));

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전(V)');
  });

  it('renders result restaurants', () => {
    const { container, getByText } = render(<App />);

    fireEvent.click(getByText('서울'));
    fireEvent.click(getByText('한식'));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('한국식초밥');
  });
});

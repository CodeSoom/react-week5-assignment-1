import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORIES, REGIONS } from './fixture';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/index.js');

describe('App', () => {
  const dispatch = jest.fn();
  const renderApp = () => render(<App />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      selected: {
        regionName: null,
        categoryId: null,
      },
      regions: REGIONS,
      categories: CATEGORIES,
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('App 렌더링', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });

  it('렌더링 시, 카테고리 리스트가 노출된다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });
});

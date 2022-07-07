import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { regions, categories } from './fixtures/restaurant';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('App', () => {
  const dispathch = jest.fn();
  useDispatch.mockImplementation(() => dispathch);

  const renderApp = () => render((
    <App />
  ));

  context('loading 중일때', () => {
    it('로딩중입니다! 가 렌더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        isLoading: true,
      }));

      const { container } = renderApp();

      expect(container).toHaveTextContent('로딩중입니다!');
    });
  });

  context('loading이 끝난후', () => {
    it('regions가 렌더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        categories,
      }));

      const { container } = renderApp();

      expect(container).toHaveTextContent(regions[0].name);
    });

    it('categories가 렌더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        regions,
      }));

      const { container } = renderApp();

      expect(container).toHaveTextContent(categories[0].name);
    });
  });
});

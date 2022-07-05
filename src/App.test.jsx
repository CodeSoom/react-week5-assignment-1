import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { regions } from './fixtures/restaurant';

jest.mock('react-redux');

describe('App', () => {
  const dispathch = jest.fn();
  useDispatch.mockImplementation(() => dispathch);

  const renderApp = () => render((
    <App />
  ));

  context('api 호출전', () => {
    it('로딩중입니다! 가 렌더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        isLoading: true,
      }));

      const { container } = renderApp();

      expect(container).toHaveTextContent('로딩중입니다!');
    });
  });

  context('api 호출후', () => {
    it('regions가 렌더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
      }));

      const { getByText } = renderApp();

      expect(getByText(regions[0].name)).not.toBeNull();
    });
  });
});

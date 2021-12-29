import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { categories } from '../__fixtures__/categories';
import { regions } from '../__fixtures__/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  context('when load', () => {
    it('set regions and categories', () => {
      render(<App />);

      // TODO: changes test, redux-thunk 테스트 형태로 변경 예정 with redux-mock-store
      expect(dispatch).toBeCalledTimes(2);
    });

    it('render regions and categories', () => {
      const { getByRole } = render(<App />);

      regions.forEach((region) => {
        expect(getByRole('button', { name: region.name })).toBeInTheDocument();
      });

      categories.forEach((category) => {
        expect(getByRole('button', { name: category.name })).toBeInTheDocument();
      });
    });

    // TODO: render restaurants
  });
});

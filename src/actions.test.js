import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from './actions';
import { get } from './utils';

jest.mock('react-redux');
jest.mock('./services/api.js');
describe('actions', () => {
  context('with fetch api', () => {
    it('loadCategories', () => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ categories: { id: 1, name: '한식' } }),
      }));
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      // https://redux.js.org/recipes/writing-tests

      dispatch(loadCategories());
      const categories = useSelector(get('categories'));
      console.log(categories);
      expect(categories).not.toBeUndefined();
      expect(dispatch).toBeCalled();
    });
  });
});

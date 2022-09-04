import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';
import { selectCategory } from './actions';

import { categories } from '../__fixtures__/data';

jest.mock('react-redux');

describe('<CategoriesContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
    selectedRegion: '',
    selectedCategory: '',
  }));
  it('renders categories', () => {
    const { container } = render((
      <CategoriesContainer />
    ));

    categories.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });

  it('clicks each button to check it\'s selected', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <CategoriesContainer />
    ));

    categories.forEach((category) => {
      fireEvent.click(getByText(category.name));
      expect(dispatch).toBeCalledWith(selectCategory(category));
    });
  });
});

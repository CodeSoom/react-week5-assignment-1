import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../__fixtures__/data';

jest.mock('react-redux');

describe('<CategoriesContainer />', () => {
  it('renders categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
      selectedCategory: '',
    }));

    const { container } = render((
      <CategoriesContainer />
    ));

    categories.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });
});

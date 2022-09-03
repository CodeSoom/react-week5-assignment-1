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

    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  });
});

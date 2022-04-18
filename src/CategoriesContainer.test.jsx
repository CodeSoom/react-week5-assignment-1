import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  it('renders categories', () => {
    const { container } = render((
      <CategoriesContainer />
    ));

    expect(container).toHaveTextContent('한식');
  });
});

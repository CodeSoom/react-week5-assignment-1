import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { categories } from './fixtures/restaurant';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const renderRegions = () => render((
    <Categories />
  ));

  it('categories가 렌더링된다', () => {
    const { container } = renderRegions();

    expect(container).toHaveTextContent(categories[0].name);
  });
});

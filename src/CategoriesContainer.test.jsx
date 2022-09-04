import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './actions';
import { categories, region } from '../__fixtures__/data';

describe('<CategoriesContainer />', () => {
  const dispatch = jest.fn();

  const KOREAN_FOOD = categories[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without selectedCategory & selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        selectedRegion: {
          id: undefined,
          name: undefined,
        },
      }));
    });

    it('renders categories', () => {
      const { container } = render((
        <CategoriesContainer />
      ));

      categories.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });

    it('clicks each button to check it\'s selected', () => {
      const { getByText, container } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(KOREAN_FOOD.name);

      categories.forEach((category) => {
        fireEvent.click(getByText(category.name));
        expect(dispatch).toBeCalledWith(selectCategory(category));
      });
    });
  });

  context('with selectedCategory & selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        selectedCategory: KOREAN_FOOD,
        selectedRegion: region,
      }));
    });

    it('load restaurants', () => {
      const { getByText } = render((
        <CategoriesContainer />
      ));

      fireEvent.click(getByText(`${KOREAN_FOOD.name}(V)`));

      expect(typeof dispatch.mock.calls[1][0]).toBe('function');
    });
  });
});

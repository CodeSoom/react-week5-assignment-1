import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import { regions, categories } from '../__fixtures__/data';

jest.mock('../__mocks__/react-redux');
jest.mock('./services/api');

describe('<App />', () => {
  const fixtureState = {
    regions,
    selectedRegion: '',
    categories,
    selectedCategory: '',
  };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: fixtureState.regions,
    categories: fixtureState.categories,
  }));

  it('renders regions and categories name', () => {
    const { container } = render((
      <App />
    ));

    regions.forEach((region) => {
      expect(container).toHaveTextContent(region.name);
    });
    categories.forEach((category) => {
      expect(container).toHaveTextContent(category.name);
    });
  });
});

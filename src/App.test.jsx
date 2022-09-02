import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import { regions, categories } from '../__fixtures__/data';

jest.mock('../__mocks__/react-redux');
jest.mock('./services/api');

describe('<App />', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: {},
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

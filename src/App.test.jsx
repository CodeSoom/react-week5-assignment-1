import { render } from '@testing-library/react';

import App from './App';

import { regions, categories } from '../__fixtures__/data';

describe('<App />', () => {
  context('render App', () => {
    it('shows regions and categories name', () => {
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
});

import { render } from '@testing-library/react';

import App from './App';

import { regions, categories } from '../__fixtures__/list';

describe('<App />', () => {
  context('render App', () => {
    it('shows regions and categories', () => {
      const { container } = render((
        <App />
      ));

      regions.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      })
      categories.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      })
    })
  })
});

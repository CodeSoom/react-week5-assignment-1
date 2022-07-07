import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import App from './App';

describe('App', () => {
  it('renders regions', () => {
    const { container } = render(<App />);

    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });
});

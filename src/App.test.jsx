import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    regions,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions', () => {
    const { container } = render(<App />);

    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });
});

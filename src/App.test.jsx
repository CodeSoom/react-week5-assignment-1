import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads regions & categories from API', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));

    render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(2);
  });

  it('renders regions list', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));

    const { getAllByRole } = render((
      <App />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
  });
});

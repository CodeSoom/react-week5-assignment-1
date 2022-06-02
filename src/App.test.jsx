import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useDispatch, useSelector } from 'react-redux';

import state from '../fixtures/state';

import App from './App';

jest.mock('react-redux');

const dispatch = useDispatch();

describe('App', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => jest.fn());

    useSelector.mockImplementation((selector) => selector({
      regions: state.regions,
      categories: state.categories,
      currentRegionId: state.currentRegionId,
      currentCategoryId: state.currentCategoryId,
    }));
  });

  it('renders regions list', () => {
    render(<App />);
    // screen.debug();
    screen.getAllByRole('button');
    // expect(state.regions.length).toHaveLength(screen.getAllByRole('button').length);
    expect(screen.getByText('서울')).toHaveValue(String(state.regions[0].id));
  });
  context('when the user clicks a region', () => {
    it('display region name with V sign in current region', async () => {
      render(<App />);
      const user = userEvent.setup();
      const seoul = screen.getByText('서울');
      await user.click(seoul);

      expect(seoul).toHaveTextContent('서울(V)');
    });
  });
  context('when the user clicks a category', () => {
    it('display category name with V sign in current category', async () => {
      render(<App />);
      const user = userEvent.setup();
      const koreanFoodStyle = screen.getByText('한식');
      await user.click(koreanFoodStyle);

      expect(koreanFoodStyle).toHaveTextContent('한식(V)');
    });
  });
  context('with currentRegionId and currentCategoryId', () => {
    it('display restaurants list', async () => {
      render(<App />);
      const user = userEvent.setup();
      const seoul = screen.getByText('서울');

      expect(screen.queryByText('양천주가')).toBeNull();

      await user.click(seoul);
      const koreanFoodStyle = screen.getByText('한식');
      await user.click(koreanFoodStyle);

      expect(screen.getByText('양천주가')).toBeInTheDocument();
    });
  });
});

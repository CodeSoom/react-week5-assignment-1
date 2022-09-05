import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { selectRegion } from './actions';
import { regions, category } from '../__fixtures__/data';

describe('<RegionsContainer />', () => {
  const dispatch = jest.fn();

  const SEOUL = regions[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without selectedRegion & selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        selectedCategory: {
          id: undefined,
          name: undefined,
        },
      }));
    });

    it('renders regions', () => {
      const { container } = render((
        <RegionsContainer />
      ));

      regions.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });

    it('clicks each button to check it\'s selected', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));

      regions.forEach((region) => {
        fireEvent.click(getByText(region.name));
        expect(dispatch).toBeCalledWith(selectRegion(region));
      });
    });
  });

  context('with selectedRegion & selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        selectedRegion: SEOUL,
        selectedCategory: category,
      }));
    });

    it('load restaurants', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));

      fireEvent.click(getByText(`${SEOUL.name}(V)`));

      expect(typeof dispatch.mock.calls[1][0]).toBe('function');
    });
  });
});

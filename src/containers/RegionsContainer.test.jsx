import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

import {
  selectRegion,
} from '../modules/actions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    selected: {
      regions: '',
    },
  }));

  it('shows regions list', () => {
    const { container } = render((
      <RegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when region button clicked', () => {
    it('changes regions', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));

      regions.forEach(({ name }) => {
        fireEvent.click(getByText(name));
        expect(dispatch).toBeCalledWith(selectRegion(name));
      });
    });
  });
});

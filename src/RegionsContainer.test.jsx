import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('RegionsContainer', () => {
  it('renders regions', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],

    }));

    const { container, getByText } = render(<RegionsContainer />);

    expect(container).toHaveTextContent(/서울/);

    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });

  context('selectedRegion is not null', () => {
    it('renders selectedRegion.name + (V)', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '부산' },
        ],
        selectedRegion: { id: 1, name: '서울' },
      };
      const {
        regions: { 0: targetRegion },
        selectedRegion,
      } = initialState;
      useSelector.mockImplementation((selector) => selector(initialState));

      const { getByText } = render(<RegionsContainer />);

      expect(targetRegion.id).toEqual(selectedRegion.id);
      expect(getByText('서울(V)')).not.toBeNull();
      expect(getByText('부산')).not.toBeNull();
    });
  });

  context('selectedRegion is null', () => {
    it('renders only regions name', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: [{ id: 1, name: '서울' }],
        selectedRegion: null,
      }));

      const { container } = render(<RegionsContainer />);

      expect(container).toHaveTextContent('서울');
      expect(container).not.toHaveTextContent('(V)');
    });
  });
});

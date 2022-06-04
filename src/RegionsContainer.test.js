import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseRegion } from './actions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('renders', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedRegion: { id: '', name: '' },
      regions: [
        { id: 1, name: '서울' },
      ],
    }));

    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
  });

  it("Adds '(v)' when click the region button", () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedRegion: { id: '', name: '' },
      regions: [
        { id: 1, name: '서울' },
      ],
    }));

    const { getByText } = render(<RegionsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith(chooseRegion({ id: 1, name: '서울' }));
  });
});

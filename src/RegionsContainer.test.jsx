import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixtures__/data';
import { selectRegion } from './actions';

describe('<RegionsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
    selectedRegion: '',
  }));

  it('renders regions', () => {
    const { container } = render((
      <RegionsContainer />
    ));

    regions.forEach((region) => {
      expect(container).toHaveTextContent(region.name);
    });
  });

  it('clicks each button to check it\'s selected', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <RegionsContainer />
    ));

    regions.forEach((region) => {
      fireEvent.click(getByText(region.name));
      expect(dispatch).toBeCalledWith(selectRegion(region));
    });
  });
});

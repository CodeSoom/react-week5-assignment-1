import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixtures__/data';

const handleClick = jest.fn();

describe('<RegionsContainer />', () => {
  it('renders regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      selectedRegion: '',
    }));

    const { container } = render((
      <RegionsContainer />
    ));

    regions.forEach((region) => {
      expect(container).toHaveTextContent(region.name);
    });
  });

  it('clicks each button to check it\'s selected', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      selectedRegion: '',
    }));

    const { getByText } = render((
      <RegionsContainer />
    ));

    regions.forEach((region) => {
      fireEvent.click(getByText(region.name));
    });

    expect(handleClick).toBeCalledTimes(regions.length);
  });
});

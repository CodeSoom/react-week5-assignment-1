import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixtures__/data';

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
});

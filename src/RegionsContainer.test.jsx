import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { REGIONS } from './fixture';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: REGIONS,
    region: { id: 1, name: '서울' },
  }));

  it('render', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
  });
});

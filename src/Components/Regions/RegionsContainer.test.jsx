import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { REGIONS } from '../../lib/fixtures';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      regions: REGIONS,
      region: '수원',
    })
  );

  it('render', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
  });
});

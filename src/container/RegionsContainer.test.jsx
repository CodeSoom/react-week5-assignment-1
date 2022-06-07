import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('RegionsContainer render', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 1,
        name: '서울',
      }],
    }));
    const { getByText } = render(<RegionsContainer />);

    expect(getByText('서울')).not.toBeNull();
  });
});

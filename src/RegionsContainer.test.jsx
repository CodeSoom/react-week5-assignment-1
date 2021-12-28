import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('전역 상태 regions 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 100,
        name: '테스트',
      }],
    }));

    const { getByText } = render(<RegionsContainer />);
    expect(getByText('테스트')).not.toBeNull();
  });
});

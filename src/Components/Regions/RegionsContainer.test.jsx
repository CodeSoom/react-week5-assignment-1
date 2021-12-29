import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { REGIONS } from '../../lib/fixtures';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      regions: REGIONS,
      region: { id: 2, name: '수원' },
    })
  );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링됩니다', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
  });
});

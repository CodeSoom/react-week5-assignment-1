import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('지역 목록이 보여집니다.', () => {
    const regions = [
      {
        id: 1, name: '대구',
      },
    ];

    const { container } = render((
      <Regions
        regions={regions}
      />
    ));

    expect(container).toHaveTextContent('대구');
  });
});

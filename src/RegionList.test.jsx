import { render } from '@testing-library/react';

import RegionList from './RegionList';

describe('RegionList', () => {
  it('renders regions', () => {
    const { container } = render((
      <RegionList
        regions={[
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
          { id: 3, name: '대구' },
        ]}
      />
    ));

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });
});

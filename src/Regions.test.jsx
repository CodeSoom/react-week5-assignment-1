import { render } from '@testing-library/react';

import Regions from './Regions';

test('RegionsContainer', () => {
  const { getByText } = render((
    <Regions
      regions={[
        { id: 1, name: '서울' },
      ]}
    />
  ));

  expect(getByText('서울')).not.toBeUndefined();
});

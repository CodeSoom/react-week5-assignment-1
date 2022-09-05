import { render } from '@testing-library/react';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  const { getByText } = render((
    <Regions regions={regions} />
  ));

  expect((getByText('서울'))).not.toBeNull();
  expect((getByText('대전'))).not.toBeNull();
});

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionListContainer from './RegionListcontainer';

jest.mock('react-redux');

test('RegionListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regionList: [
      {
        id: 1, name: '서울',
      },
    ],
  }));
  const { queryByText } = render((
    <RegionListContainer />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
});

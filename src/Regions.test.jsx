import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
  ];

  const { getByText } = render(<Regions regions={regions} />);
  const button = getByText('서울');

  fireEvent.click(button);

  expect(button).not.toBeNull();
});

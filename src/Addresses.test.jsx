import { render } from '@testing-library/react';

import Addresses from './Addresses';

import { addresses } from '../fixtures/staticData';

function customRender() {
  return render(<Addresses addresses={addresses} />);
}

describe('Addresses', () => {
  test('renders addresses', () => {
    const { queryByText } = customRender();

    expect(queryByText('서울')).not.toBeNull();
  });
});

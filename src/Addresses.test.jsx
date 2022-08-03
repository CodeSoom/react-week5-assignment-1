import { render } from '@testing-library/react';

import Addresses from './Addresses';

import { addresses } from '../fixtures/staticData';

function customRender() {
  return render(<Addresses addresses={addresses} />);
}

describe('Addresses', () => {
  context('with 서울 selected', () => {
    test('서울 has check mark', () => {
      const { queryByText } = customRender();

      expect(queryByText('서울(V)')).not.toBeNull();
    });
    test('대전 does not have check mark', () => {
      const { queryByText } = customRender();

      expect(queryByText('대전(V)')).toBeNull();
      expect(queryByText('대전')).not.toBeNull();
    });
  });
});

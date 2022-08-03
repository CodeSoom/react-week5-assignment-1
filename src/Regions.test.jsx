import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../fixtures/staticData';

function customRender() {
  return render(<Regions regions={regions} />);
}

describe('Regions', () => {
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

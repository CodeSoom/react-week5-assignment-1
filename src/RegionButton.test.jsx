import { render } from '@testing-library/react';

import RegionButton from './RegionButton';

import { regions } from '../fixtures/staticData';

const selectedRegion = regions[0];
const unselectedRegion = regions[1];
const onClick = jest.fn();

function customRender(address) {
  const { id, name, selected } = address;
  return render(
    <RegionButton
      key={id}
      name={name}
      selected={selected}
      onClick={onClick}
    />,
  );
}

describe('RegionButton', () => {
  context('with 서울 selected', () => {
    test('서울 has check mark', () => {
      const { queryByText } = customRender(selectedRegion);

      expect(queryByText('서울(V)')).not.toBeNull();
    });

    test('대전 does not have check mark', () => {
      const { queryByText } = customRender(unselectedRegion);

      expect(queryByText('대전(V)')).toBeNull();
      expect(queryByText('대전')).not.toBeNull();
    });
  });
});

import { render } from '@testing-library/react';

import AddressButton from './AddressButton';

import { addresses } from '../fixtures/staticData';

const selectedAddress = addresses[0];
const unselectedAddress = addresses[1];
const onClick = jest.fn();

function customRender(address) {
  const { id, name, selected } = address;
  return render(
    <AddressButton
      key={id}
      name={name}
      selected={selected}
      onClick={onClick}
    />,
  );
}

describe('AddressButton', () => {
  context('with 서울 selected', () => {
    test('서울 has check mark', () => {
      const { queryByText } = customRender(selectedAddress);

      expect(queryByText('서울(V)')).not.toBeNull();
    });

    test('대전 does not have check mark', () => {
      const { queryByText } = customRender(unselectedAddress);

      expect(queryByText('대전(V)')).toBeNull();
      expect(queryByText('대전')).not.toBeNull();
    });
  });
});

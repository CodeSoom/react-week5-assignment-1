import { render, fireEvent } from '@testing-library/react';

import Places from './Places';

import places from '../../fixtures/places';

jest.mock('react-redux');

describe('Places', () => {
  const handleClickPlace = jest.fn();

  function renderPlaces(clickedPlace) {
    return render((
      <Places
        places={places}
        clickedPlace={clickedPlace}
        onClick={handleClickPlace}
      />
    ));
  }

  it('shows places name buttons', () => {
    const clickedPlace = '서울';

    const { container } = renderPlaces(clickedPlace);

    places.forEach(({ name }) => {
      const button = clickedPlace === name
        ? `${name}(V)`
        : name;
      expect(container).toHaveTextContent(button);
    });
  });

  context('when place buttons clicked', () => {
    it('renders handleClickPlace function', () => {
      const clickedPlace = '';

      const { container, getByText } = renderPlaces(clickedPlace);

      places.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
        fireEvent.click(getByText(name));
      });
    });
  });
});

import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

import locations from '../fixtures/locations';

describe('Buttons', () => {
  it('renders list', () => {
    const { container } = render((
      <Buttons
        stateValue=""
        valueList={locations}
        onClick={() => {}}
      />
    ));

    expect(container).toHaveTextContent(locations[0].name);
  });

  it('changes state by clicking the location button', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <Buttons
        stateValue=""
        valueList={locations}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalledWith('서울');
  });
});

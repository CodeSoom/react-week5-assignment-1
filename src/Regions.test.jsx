import { fireEvent, render } from '@testing-library/react';

import regions from '../fixtures/region';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const handleClick = jest.fn();
  it('Shows region', () => {
    const { queryByText } = render((
      <Regions
        regions={regions}
        handleClick={handleClick}
      />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
  });

  it('Changes text', () => {
    const { getByText, queryByText } = render((
      <Regions
        regions={regions}
        handleClick={handleClick}
      />
    ));

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText(`${regions[0].name}`));

    expect(queryByText(/(V)/)).not.toBeNull();
  });
});

import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('renders Buttons', () => {
    const handleClick = jest.fn();
    const currentId = '1';

    render(
      <Buttons
        items={state.regions}
        name="currentRegionId"
        currentId={currentId}
        onClick={handleClick}
      />,
    );

    state.regions.forEach((region) => {
      // (V)표시가 생기는걸 테스트 해야하는것 같은데 expect해도 되는건가
      if (region.id === Number(currentId)) {
        expect(screen.getByText(`${region.name}(V)`)).toHaveValue(String(region.id));
      }
      if (region.id !== Number(currentId)) {
        expect(screen.getByText(region.name)).toHaveValue(String(region.id));
      }
    });
  });
});

import { fireEvent, render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

describe('<RegionContainer/>', () => {
  const handleClick = jest.fn();

  const renderRegionContainer = () => ((
    render(<RegionContainer onClick={handleClick} />)
  ));

  it('클릭하면 handleClick 호출.', async () => {
    const { getByText } = await renderRegionContainer();

    setTimeout(() => {
      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalled();
    }, 100);
  });
});

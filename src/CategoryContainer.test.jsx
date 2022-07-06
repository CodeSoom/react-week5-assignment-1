import { fireEvent, render } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

describe('<Category/>', () => {
  const handleClick = jest.fn();

  const renderCategoryContainer = () => ((
    render(<CategoryContainer onClick={handleClick} />)
  ));
  it('클릭하면 handleClick 호출.', async () => {
    const { getByText } = await renderCategoryContainer();

    setTimeout(() => {
      fireEvent.click(getByText('한식'));

      expect(handleClick).toBeCalled();
    }, 100);
  });
});

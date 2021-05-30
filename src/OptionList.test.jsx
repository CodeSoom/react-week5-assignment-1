import { render } from '@testing-library/react';
import OptionList from './OptionList';

describe('OptionList', () => {
  it('renders options', () => {
    const options = ['a', 'b', 'c', 'd', 'e'];

    const { container } = render(<OptionList options={options} />);
    options.forEach((option) => {
      expect(container).toHaveTextContent(option);
    });
  });
});

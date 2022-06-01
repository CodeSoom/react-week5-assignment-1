import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { container } = render(<App />);

    expect(container).toHaveTextContent('한식');
  });
});

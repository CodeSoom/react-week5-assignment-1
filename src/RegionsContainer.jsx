import Buttons from './Buttons';

import { regions } from '../__fixtures__/list';

export default function RegionsContainer() {
  return (
    <Buttons roles={regions} />
  );
}

import {
  nameFunctions,
} from './helper';

describe('helper', () => {
  describe('nameFunctions', () => {
    it('returns with (V)', () => {
      expect(nameFunctions.true('한식')).toBe('한식(V)');
    });

    it('returns name', () => {
      expect(nameFunctions.false('한식')).toBe('한식');
    });
  });
});

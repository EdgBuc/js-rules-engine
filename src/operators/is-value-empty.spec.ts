import { isValueEmpty } from './is-value-empty';

describe('valueIsEmpty', () => {
  test.each([undefined, null, '', []])(
    'should return true for value: %s',
    (value) => {
      expect(isValueEmpty(value)).toEqual(true);
    }
  );
});

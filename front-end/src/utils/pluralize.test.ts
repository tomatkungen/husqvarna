import { pluralize } from './pluralize';

describe('pluralize', () => {
  it('should get pluralize', () => {
    const items = pluralize(2, 'item');

    expect(items).toEqual('items');
  });

  it('should not get plurazlize', () => {
    const items = pluralize(1, 'item');

    expect(items).toEqual('item');
  });
});

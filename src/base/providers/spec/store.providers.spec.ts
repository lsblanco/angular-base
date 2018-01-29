import { expect } from 'chai';
import {  } from '@angular/router';

import { CustomRouterSerializer } from '../store.providers';

describe('Base: providers: store', () => {
  it('CustomRouterSerializer should', () => {
    const serializer = new CustomRouterSerializer();
    expect(serializer.serialize({ url: 'testingurl', root: null })).to.equal('testingurl');
  });
});

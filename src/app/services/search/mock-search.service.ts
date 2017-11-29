import { Injectable } from '@angular/core';
import { AbstractSearch } from './abstract-search';

@Injectable()
export class MockSearchService implements AbstractSearch {
  public search() {
    return 'din mockuletz';
  }

  constructor() { }

}

import { Injectable } from '@angular/core';
import { AbstractSearch } from './abstract-search';

@Injectable()
export class SearchService implements AbstractSearch{
  public search() {
    return 'search normal';
  }

  constructor() { }

}

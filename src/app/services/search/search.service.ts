import { Injectable } from '@angular/core';
import { AbstractSearch } from './abstract-search';
import { Observable } from 'rxjs/Observable';
import { Paper } from '../../models/paper';

@Injectable()
export class SearchService implements AbstractSearch {
  public getPages(): Observable<Paper[]> {
    throw new Error('Method not implemented.');
  }
  public search() {
    return 'search normal';
  }

  constructor() { }

}

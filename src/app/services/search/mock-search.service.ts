import { Injectable } from '@angular/core';
import { AbstractSearch } from './abstract-search';
import { Observable } from 'rxjs/Observable';
import { Paper } from '../../models/paper';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MockSearchService implements AbstractSearch {
  papers = [
    new Paper(22, 'MachineLearning for Malware Detection',
      ['Liviu Ciortuz', 'Tom Michael'], 'Alexandru Ioan Cuza',
      'Machine Learning', new Date('02-02-1999'), 'www.machinelearning.com'),
  ];
  public getPages(): Observable<Paper[]> {
    return of(this.papers);
  }
  public search() {
    return 'din mockuletz';
  }

  constructor() { }

}

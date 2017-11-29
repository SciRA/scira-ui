import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Paper } from '../../models/paper';

@Injectable()
export abstract class AbstractSearch {
    public abstract search();
    public abstract getPages(): Observable<Paper[]>;
}

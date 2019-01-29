import { BehaviorSubject, Observable } from 'rxjs';
import { Store, StateObservable, ActionsSubject, ReducerManager } from '@ngrx/store';

export class StoreMock<T> {
  private state: BehaviorSubject<T> = new BehaviorSubject(undefined);

  setState(data: T) {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  pipe(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  dispatch(action: any) {}
}


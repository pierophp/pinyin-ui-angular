import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromSidenav from './sidenav/sidenav.reducer';

export interface State {
  sidenav: fromSidenav.SidenavState;
}

export const reducers: ActionReducerMap<State> = {
  sidenav: fromSidenav.reducer,
};

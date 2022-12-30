import { createReducer, createSelector, on } from '@ngrx/store';
import * as SidenavActions from './sidenav.actions';
// @ts-ignore
import update from 'update-immutable';
import { State } from 'src/app/states/index';

export interface SidenavState {
  opened: boolean;
}
export const initialState: SidenavState = {
  opened: false,
};

export const reducer = createReducer(
  initialState,
  on(SidenavActions.toggleOpened, (state) => {
    return update(initialState, {
      opened: {
        $set: !state.opened,
      },
    });
  }),
  on(SidenavActions.setOpened, (state, props) => {
    return update(initialState, {
      opened: {
        $set: props.opened,
      },
    });
  })
);

export const getSidenavState = (state: State): SidenavState => state.sidenav;

export const getOpened = createSelector(
  getSidenavState,
  (state: SidenavState) => state.opened
);

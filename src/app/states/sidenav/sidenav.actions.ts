import { createAction, props } from '@ngrx/store';

export const toggleOpened = createAction('[Sidenav] Toggle Opened');
export const setOpened = createAction(
  '[Sidenav] Set Opened',
  props<{ opened: boolean }>()
);

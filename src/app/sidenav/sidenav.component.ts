import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from 'src/app/states';
import * as fromSidenav from 'src/app/states/sidenav/sidenav.reducer';
import * as SidenavActions from 'src/app/states/sidenav/sidenav.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  opened$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.opened$ = this.store.select(fromSidenav.getOpened);
  }

  setOpened(opened: boolean) {
    this.store.dispatch(SidenavActions.setOpened({ opened }));
  }
}

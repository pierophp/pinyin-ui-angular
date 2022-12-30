import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/states';
import * as SidenavActions from 'src/app/states/sidenav/sidenav.actions';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private store: Store<fromRoot.State>) {}

  toggleSidenav() {
    this.store.dispatch(SidenavActions.toggleOpened());
  }
}

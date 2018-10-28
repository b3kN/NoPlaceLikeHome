import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'about',
  providers: [],
  styleUrls: [ './about.component.css' ],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('hello `About` component');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}

import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'header',
  styleUrls: [ './header.component.css' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('hello `Header` component');
  }
}

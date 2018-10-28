import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'footer',
  styleUrls: [ './footer.component.css' ],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('hello `Footer` component');
  }
}

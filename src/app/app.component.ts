import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

export const ROOT_SELECTOR = 'app';

@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header></header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer></footer>
  `
})
export class AppComponent implements OnInit {
  public name = 'Illustrious Online';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://www.github.com/b3kN/illustrious-site';
  public url = 'https://www.github.com/b3kN/illustrious-site';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './dev-module.routes';
import { DevModuleComponent } from './dev-module.component';

@NgModule({
  declarations: [ DevModuleComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class DevModuleModule {
  public static routes = routes;
  constructor() {
    console.log('`DevModuleModule` module initialized');
  }
}

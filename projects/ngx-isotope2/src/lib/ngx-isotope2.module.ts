import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { IsotopeGridComponent } from './isotope-grid/isotope-grid.component';
import { IsotopeItemComponent } from './isotope-item/isotope-item.component';

@NgModule({
  declarations: [
    IsotopeItemComponent,
    IsotopeGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsotopeItemComponent,
    IsotopeGridComponent
  ]
})
export class NgxIsotope2Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIsotope2Module,
      providers: []
    };
  }
}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Shared } from './shared';

@NgModule({
  declarations: [
    Shared,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Shared
  ]
})
export class SharedModule {}

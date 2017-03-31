import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThirdPage } from './third-page';
import {SharedModule} from "../../components/shared/shared.module";

@NgModule({
  declarations: [
    ThirdPage,
  ],
  imports: [
    IonicPageModule.forChild(ThirdPage),
    SharedModule,
  ],
  exports: [
    ThirdPage
  ]
})
export class ThirdPageModule {}

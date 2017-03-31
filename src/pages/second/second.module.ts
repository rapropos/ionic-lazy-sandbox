import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Second } from './second';
import {SharedModule} from "../../components/shared/shared.module";

@NgModule({
  declarations: [
    Second,
  ],
  imports: [
    IonicPageModule.forChild(Second),
    SharedModule,
  ],
})
export class SecondModule {}

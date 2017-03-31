import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {HomePage} from "./home";
import {SharedModule} from "../../components/shared/shared.module";

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage), SharedModule],
  exports: [HomePage],
})
export class HomePageModule {
}

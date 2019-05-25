import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import {ShoppingListModule} from "./shopping-list/shopping-list.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    ShoppingListModule
  ],
  providers: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    console.error("in Ng2 constructor");
  }

  ngDoBootstrap(){
    console.error("Bootstrap from ng2");
    this.upgrade.bootstrap(document.body, ['recipe-book'], {strictDi: true});
  }
}

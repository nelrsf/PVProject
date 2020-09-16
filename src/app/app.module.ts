import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panel.component';
import { PanelInverterComponent } from './panel-inverter/panel-inverter.component';
import { InverterComponent } from './inverter/inverter.component';
import { InverterLoadComponent } from './inverter-load/inverter-load.component';
import { LoadComponent } from './load/load.component';
import { InverterBatteryComponent } from './inverter-battery/inverter-battery.component';
import { BatteryComponent } from './battery/battery.component';
import { AutoSystemComponent } from './auto-system/auto-system.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    PanelInverterComponent,
    InverterComponent,
    InverterLoadComponent,
    LoadComponent,
    InverterBatteryComponent,
    BatteryComponent,
    AutoSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

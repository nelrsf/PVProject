import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelComponent } from './components/system-elements/panel/panel.component';
import { PanelInverterComponent } from './components/system-elements/panel-inverter/panel-inverter.component';
import { InverterComponent } from './components/system-elements/inverter/inverter.component';
import { InverterLoadComponent } from './components/system-elements/inverter-load/inverter-load.component';
import { LoadComponent } from './components/system-elements/load/load.component';
import { InverterBatteryComponent } from './components/system-elements/inverter-battery/inverter-battery.component';
import { BatteryComponent } from './components/system-elements/battery/battery.component';
import { AutoSystemComponent } from './components/auto-system/auto-system.component';
import { HomeComponent } from './components/home/home.component';
import { LoadlistComponent } from './components/elements-features/loadlist/loadlist.component';

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
    AutoSystemComponent,
    HomeComponent,
    LoadlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

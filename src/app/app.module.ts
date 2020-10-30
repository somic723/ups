import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClient } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomToolbarComponent } from './main/custom-toolbar/custom-toolbar.component';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SettingsService } from '@arc.module/services/settings.service';
import { ArcModule } from '@arc.module/arc.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfigpannelComponent } from './ups/configpannel/configpannel.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';


import { StatusComponent } from './ups/status/status.component';
import { MainupsComponent } from './ups/mainups/mainups.component';
import { AlarmsComponent } from './ups/alarms/alarms.component';
import { IdentificationComponent } from './ups/identification/identification.component';
import { UpstestComponent } from './ups/upstest/upstest.component';
import { UpscontrolComponent } from './ups/upscontrol/upscontrol.component';
import { UpsconfigurstionComponent } from './ups/upsconfigurstion/upsconfigurstion.component';
import { NetworkComponent } from './ups/network/network.component';
import { DatetimeComponent } from './ups/datetime/datetime.component';



function load(http: HttpClient, service: SettingsService): (() => Promise<boolean>) {
  return service.init();
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    CustomToolbarComponent,
    MainupsComponent,
    AlarmsComponent,
    ConfigpannelComponent,
    StatusComponent,
    IdentificationComponent,
    UpstestComponent,
    UpscontrolComponent,
    UpsconfigurstionComponent,
    NetworkComponent,
    DatetimeComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    MatFabMenuModule,
    ArcModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: load,
    deps: [
      HttpClient,
      SettingsService
    ],
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule { }

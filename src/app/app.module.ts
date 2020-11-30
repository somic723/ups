import { SharedComponentsModule } from './@shared-components/shared-components.module';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';


import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SettingsService } from '@arc.module/services/settings.service';
import { ArcModule } from '@arc.module/arc.module';
import { CommonModule } from '@angular/common';



import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './my_ui/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './my_ui/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './my_ui/card/card.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MiniCardComponent } from './my_ui/mini-card/mini-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SalesComponent } from './my_ui/sales/sales.component';
import { ProductSalesChartComponent } from './my_ui/charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './my_ui/charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './my_ui/charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './my_ui/charts/store-sessions-chart/store-sessions-chart.component';
import { OrdersTableComponent } from './my_ui/orders/orders-table/orders-table.component';
import { OutputComponent } from './my_ui/charts/output/output.component';
import { BypassComponent } from './my_ui/charts/bypass/bypass.component';
import { AlarmtableComponent } from './my_ui/alarmtable/alarmtable.component';
import { SettingComponent } from './my_ui/setting/setting.component';
import { UpstesttabComponent } from './my_ui/upstesttab/upstesttab.component';

import {MatTabsModule} from '@angular/material/tabs';

import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { UpstimeComponent } from './my_ui/upstime/upstime.component';
import { UpsnetComponent } from './my_ui/upsnet/upsnet.component';
import { UpsconfigComponent } from './my_ui/upsconfig/upsconfig.component';
import { UpscontrolComponent } from './my_ui/upscontrol/upscontrol.component';
import { UpsconnectComponent } from './my_ui/upsconnect/upsconnect.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { Input1Component } from './my_ui/dash/ups1/input1/input1.component';
import { Output1Component } from './my_ui/dash/ups1/output1/output1.component';
import { Bypass1Component } from './my_ui/dash/ups1/bypass1/bypass1.component';
import { Temp1Component } from './my_ui/dash/ups1/temp1/temp1.component';
import { Battery1Component } from './my_ui/dash/ups1/battery1/battery1.component';
import { Batteryinfo1Component } from './my_ui/dash/ups1/batteryinfo1/batteryinfo1.component';
import { Input2Component } from './my_ui/dash/ups2/input2/input2.component';
import { Output2Component } from './my_ui/dash/ups2/output2/output2.component';
import { Bypassput2Component } from './my_ui/dash/ups2/bypassput2/bypassput2.component';
import { Battery2Component } from './my_ui/dash/ups2/battery2/battery2.component';
import { Batteryinfo2Component } from './my_ui/dash/ups2/batteryinfo2/batteryinfo2.component';
import { Temp2Component } from './my_ui/dash/ups2/temp2/temp2.component';
import { Status2Component } from './my_ui/dash/ups2/status2/status2.component';
import { Status1Component } from './my_ui/dash/ups1/status1/status1.component';
import { RebootComponent } from './my_ui/reboot/reboot.component';


function load(http: HttpClient, service: SettingsService): (() => Promise<boolean>) {
  return service.init();
}
@NgModule({
  declarations: [
    AppComponent,
     NavComponent,
     DashComponent,
     CardComponent,
     MiniCardComponent,
     SalesComponent,
     ProductSalesChartComponent,
     SalesTrafficChartComponent,
     AnnualSalesChartComponent,
     StoreSessionsChartComponent,
     OrdersTableComponent,
     OutputComponent,
     BypassComponent,
     AlarmtableComponent,
     SettingComponent,
     UpstesttabComponent,
     UpstimeComponent,
     UpsnetComponent,
     UpsconfigComponent,
     UpscontrolComponent,
     UpsconnectComponent,
     Input1Component,
     Output1Component,
     Bypass1Component,
     Temp1Component,
     Battery1Component,
     Batteryinfo1Component,
     Input2Component,
     Output2Component,
     Bypassput2Component,
     Battery2Component,
     Batteryinfo2Component,
     Temp2Component,
     Status2Component,
     Status1Component,
     RebootComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ArcModule,
    MaterialModule,
    MatTabsModule ,
    // HttpClientModule,

    // PagesModule,
    SharedComponentsModule,
    // MatTabsModule,
    // MatSelectModule,
    // MatRadioModule,
    // ReactiveFormsModule ,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatTabsModule,
     BrowserModule,
    // BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatProgressButtonsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatGridListModule,
    // MatCardModule,
    // MatMenuModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatChipsModule,
    // MatProgressBarModule,
    NgCircleProgressModule.forRoot(),

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

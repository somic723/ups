import { TelegramLogPagePresenter } from '@arc.module/components/pages/telegram-log-page/telegram-log-page-presenter';
import { TelegramModificationPagePresenter } from '@arc.module/components/pages/telegram-modification-page/telegram-modification-page-presenter';
import { MenuPagePresenter } from '@arc.module/components/pages/menu-page/menu-page-presenter';
import { AlertDefinitionPagePresenter } from '@arc.module/components/pages/alert-definition-page/alert-definition-page-presenter';
import { AlertLogPagePresenter } from '@arc.module/components/pages/alert-log-page/alert-log-page-presenter';
import { ShiftPagePresenter } from '@arc.module/components/pages/shift-page/shift-page-presenter';
import { LoginPagePresenter } from '@arc.module/components/pages/login-page/login-page-presenter';
import { UserPagePresenter } from '@arc.module/components/pages/user-page/user-page-presenter';
import { ReportDefinitionPagePresenter } from '@arc.module/components/pages/report-definition-page/report-definition-page-presenter';
import { SettingComponent } from '../app/my_ui/setting/setting.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ARC_ROUTES } from '@arc.module/arc.module';
import { DashComponent } from './my_ui/dash/dash.component';


const routes: Routes = [
  ...ARC_ROUTES,


  { path: 'dashboard', component: DashComponent },

   { path: 'setting', component: SettingComponent }


]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { TelegramLogPagePresenter } from '@arc.module/components/pages/telegram-log-page/telegram-log-page-presenter';
import { TelegramModificationPagePresenter } from '@arc.module/components/pages/telegram-modification-page/telegram-modification-page-presenter';
import { MenuPagePresenter } from '@arc.module/components/pages/menu-page/menu-page-presenter';
import { AlertDefinitionPagePresenter } from '@arc.module/components/pages/alert-definition-page/alert-definition-page-presenter';
import { AlertLogPagePresenter } from '@arc.module/components/pages/alert-log-page/alert-log-page-presenter';
import { ShiftPagePresenter } from '@arc.module/components/pages/shift-page/shift-page-presenter';
import { LoginPagePresenter } from '@arc.module/components/pages/login-page/login-page-presenter';
import { UserPagePresenter } from '@arc.module/components/pages/user-page/user-page-presenter';
import { ReportDefinitionPagePresenter } from '@arc.module/components/pages/report-definition-page/report-definition-page-presenter';


import { MainupsComponent } from './ups/mainups/mainups.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPagePresenter },
  { path: 'shift-definition', component: ShiftPagePresenter },
  { path: 'alert-log', component: AlertLogPagePresenter },
  { path: 'alert-definition', component: AlertDefinitionPagePresenter },
  { path: 'menu-definition', component: MenuPagePresenter },
  { path: 'user-definition', component: UserPagePresenter },
  { path: 'report-definition', component: ReportDefinitionPagePresenter },
  { path: 'telegram-modification', component: TelegramModificationPagePresenter },
  { path: 'telegram-log', component: TelegramLogPagePresenter },
  { path: 'entry', component: MainupsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

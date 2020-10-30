import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GetAlertTypeNamePipe } from './pipes/get-alert-type-name.pipe'

import { DragDropModule } from '@angular/cdk/drag-drop';



import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LoginPageComponent } from './components/pages/login-page/view/login-page-view';
import { LoginPagePresenter } from './components/pages/login-page/login-page-presenter'

import { ArcFooterView } from './components/shared-components/footer/view/arc-footer-view'
import { ArcFooterPresenter } from './components/shared-components/footer/arc-footer-presenter'

import { AlertLogListPresenter } from './components/shared-components/footer/components/alert-log-list/alert-log-list-presenter'
import { AlertLogListView } from './components/shared-components/footer/components/alert-log-list/view/alert-log-list-view'

import { ArcToolbarView } from './components/shared-components/toolbar/view/arc-toolbar-view'
import { ArcToolbarPresenter } from './components/shared-components/toolbar/arc-toolbar-presenter'

import { PopupAlertPresenter } from './components/shared-components/toolbar/components/popup-alert/popup-alert-presenter'
import { PopupAlertView } from './components/shared-components/toolbar/components/popup-alert/view/popup-alert-view'

import { UserEditorPresenter } from './components/shared-components/user-editor/user-editor-presenter'
import { UserEditorView } from './components/shared-components/user-editor/view/user-editor-view'

import { ArcSidenavPresenter } from './components/shared-components/sidenav/sidenav-presenter'
import { ArcSidenavView } from './components/shared-components/sidenav/view/arc-sidenav-view'

import { UnitSelectorPresenter } from './components/shared-components/unit-selector/unit-selector-presenter'
import { UnitSelectorView } from './components/shared-components/unit-selector/view/unit-selector-view'

import { UserGroupSelectorPresenter } from './components/shared-components/user-group-selector/user-group-selector-presenter'
import { UserGroupSelectorView } from './components/shared-components/user-group-selector/view/user-group-selector-view'

import { ConfirmModalView } from './components/shared-components/Confirm/view/confirm-modal-view'

import { EditResponseDataPresenter } from './components/pages/telegram-log-page/components/edit-response-data/edit-response-data-presenter'
import { EditResponseDataView } from './components/pages/telegram-log-page/components/edit-response-data/view/edit-response-data-view'

import { TelegramFilterPresenter } from './components/pages/telegram-log-page/components/telegram-filter/telegram-filter-presenter'
import { TelegramFilterView } from './components/pages/telegram-log-page/components/telegram-filter/view/telegram-filter-view'

import { TelegramGridPresenter } from './components/pages/telegram-log-page/components/telegram-grid/telegram-grid-presenter'
import { TelegramGridView } from './components/pages/telegram-log-page/components/telegram-grid/view/telegram-grid-view'

import { TelegramLogPagePresenter } from './components/pages/telegram-log-page/telegram-log-page-presenter'
import { TelegramLogPageView } from './components/pages/telegram-log-page/view/telegram-log-page-view'

import { AlertAddEditPresenter } from './components/pages/alert-definition-page/components/alert-add-edit/alert-add-edit-presenter'
import { AlertAddEditView } from './components/pages/alert-definition-page/components/alert-add-edit/view/alert-add-edit-view'

import { AlertDetailPresenter } from './components/pages/alert-definition-page/components/alert-detail/alert-detail-presenter'
import { AlertDetailView } from './components/pages/alert-definition-page/components/alert-detail/view/alert-detail-view'

import { AlertListPresenter } from './components/pages/alert-definition-page/components/alert-list/alert-list-presenter'
import { AlertListView } from './components/pages/alert-definition-page/components/alert-list/view/alert-list-view'

import { AlertSendPresenter } from './components/pages/alert-definition-page/components/alert-send/alert-send-presenter'
import { AlertSendView } from './components/pages/alert-definition-page/components/alert-send/view/alert-send-view'

import { AlertDefinitionPagePresenter } from './components/pages/alert-definition-page/alert-definition-page-presenter'
import { AlertDefinitionPageView } from './components/pages/alert-definition-page/view/alert-definition-page-view'

import { AlertLogFilterPresenter } from './components/pages/alert-log-page/components/alert-log-filter/alert-log-filter-presenter'
import { AlertLogfilterView } from './components/pages/alert-log-page/components/alert-log-filter/view/alert-log-filter-view'

import { AlertLogFilterDialogPresenter } from './components/pages/alert-log-page/components/alert-log-filter-dialog/alert-log-filter-dialog-presenter'
import { AlertLogFilterDialogView } from './components/pages/alert-log-page/components/alert-log-filter-dialog/view/alert-log-filter-dialog-view'

import { AlertLogTable2Presenter } from './components/pages/alert-log-page/components/alert-log-table2/alert-log-table2-presenter'
import { AlertLogTable2View } from './components/pages/alert-log-page/components/alert-log-table2/view/alert-log-table2-view'

import { AlertLogPagePresenter } from './components/pages/alert-log-page/alert-log-page-presenter'
import { AlertLogPageView } from './components/pages/alert-log-page/view/alert-log-page-view'

import { MenuAddEditPresenter } from './components/pages/menu-page/components/menu-add-edit/menu-add-edit-presenter'
import { MenuAddEditView } from './components/pages/menu-page/components/menu-add-edit/view/menu-add-edit-view'

import { MenuListPresenter } from './components/pages/menu-page/components/menu-list/menu-list-presenter'
import { MenuListView } from './components/pages/menu-page/components/menu-list/view/menu-list-view'

import { SubmenuAddEditModalPresenter } from './components/pages/menu-page/components/submenu-add-edit/submenu-add-edit-modal-presenter'
import { SubmenuAddEditModalView } from './components/pages/menu-page/components/submenu-add-edit/view/submenu-add-edit-modal-view'

import { SubmenuListPresenter } from './components/pages/menu-page/components/submenu-list/submenu-list-presenter'
import { SubmenuListView } from './components/pages/menu-page/components/submenu-list/view/submenu-list-view'

import { MenuPagePresenter } from './components/pages/menu-page/menu-page-presenter'
import { MenuPageView } from './components/pages/menu-page/view/menu-page-view'

import { ReportAddEditPresenter } from './components/pages/report-definition-page/components/report-add-edit/report-add-edit-presenter'
import { ReportAddEditView } from './components/pages/report-definition-page/components/report-add-edit/view/report-add-edit-view'

import { ReportGroupAddEditPresenter } from './components/pages/report-definition-page/components/report-group-add-edit/report-group-add-edit-presenter'
import { ReportGroupAddEditView } from './components/pages/report-definition-page/components/report-group-add-edit/view/report-group-add-edit-view'

import { ReportGroupListPresenter } from './components/pages/report-definition-page/components/report-group-list/report-group-list-presenter'
import { ReportGroupListView } from './components/pages/report-definition-page/components/report-group-list/view/report-group-list-view'

import { ReportListPresenter } from './components/pages/report-definition-page/components/report-list/report-list-presenter'
import { ReportListView } from './components/pages/report-definition-page/components/report-list/view/report-list-view'

import { ReportDefinitionPagePresenter } from './components/pages/report-definition-page/report-definition-page-presenter'
import { ReportDefinitionPageView } from './components/pages/report-definition-page/view/report-definition-page-view'

import { AutoAssignPresenter } from './components/pages/shift-page/components/auto-assign/auto-assign-presenter'
import { AutoAssignView } from './components/pages/shift-page/components/auto-assign/view/auto-assign-view'

import { ConfirmDialogPresenter } from './components/pages/shift-page/components/confirm-dialog/confirm-dialog-presenter.component'
import { ConfirmDialogView } from './components/pages/shift-page/components/confirm-dialog/view/confirm-dialog-view'

import { MonthDaysPresenter } from './components/pages/shift-page/components/month-days/month-days-presenter'
import { MonthDaysView } from './components/pages/shift-page/components/month-days/view/month-days-view'

import { ShiftPresenter } from './components/pages/shift-page/components/shift/shift-presenter'
import { ShiftView } from './components/pages/shift-page/components/shift/view/shift-view'

import { TeamPresenter } from './components/pages/shift-page/components/team/team-presenter'
import { TeamView } from './components/pages/shift-page/components/team/view/team-view'

import { ShiftPagePresenter } from './components/pages/shift-page/shift-page-presenter'
import { ShiftPageView } from './components/pages/shift-page//view/shift-page-view'

import { TelegramBodyPresenter } from './components/pages/telegram-modification-page/components/telegram-body/telegram-body-presenter'
import { TelegramBodyView } from './components/pages/telegram-modification-page/components/telegram-body/view/telegram-body-view'

import { TelegramEditPresenter } from './components/pages/telegram-modification-page/components/telegram-edit/telegram-edit-presenter'
import { TelegramEditView } from './components/pages/telegram-modification-page/components/telegram-edit/view/telegram-edit-view'

import { TelegramListPresenter } from './components/pages/telegram-modification-page/components/telegram-list/telegram-list-presenter'
import { TelegramListView } from './components/pages/telegram-modification-page/components/telegram-list/view/telegram-list-view'

import { TelegramModificationPagePresenter } from './components/pages/telegram-modification-page/telegram-modification-page-presenter'
import { TelegramModificationPageView } from './components/pages/telegram-modification-page/view/telegram-modification-page-view'

import { GroupAddEditPresenter } from './components/pages/user-page/components/group-add-edit/group-add-edit-presenter'
import { GroupAddEditView } from './components/pages/user-page/components/group-add-edit/view/group-add-edit-view'

import { UserAddEditPresenter } from './components/pages/user-page/components/user-add-edit/user-add-edit-presenter'
import { UserAddEditView } from './components/pages/user-page/components/user-add-edit/view/user-add-edit-view'

import { UserPagePresenter } from './components/pages/user-page/user-page-presenter'
import { UserPageView } from './components/pages/user-page/view/user-page-view'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { GetTelegramNameByIdPipe } from './pipes/get-telegram-name-by-id.pipe';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    GetAlertTypeNamePipe,
    LoginPageComponent,
    LoginPagePresenter,
    ArcFooterView,
    ArcFooterPresenter,
    AlertLogListView,
    AlertLogListPresenter,
    ArcToolbarPresenter,
    ArcToolbarView,
    PopupAlertPresenter,
    PopupAlertView,
    UserEditorPresenter,
    UserEditorView,
    ArcSidenavPresenter,
    ArcSidenavView,
    UnitSelectorPresenter,
    UnitSelectorView,
    UserGroupSelectorPresenter,
    UserGroupSelectorView,
    ConfirmModalView,
    EditResponseDataPresenter,
    EditResponseDataView,
    TelegramFilterPresenter,
    TelegramFilterView,
    TelegramGridPresenter,
    TelegramGridView,
    TelegramLogPagePresenter,
    TelegramLogPageView,
    AlertAddEditPresenter,
    AlertAddEditView,
    AlertDetailPresenter,
    AlertDetailView,
    AlertListPresenter,
    AlertListView,
    AlertSendPresenter,
    AlertSendView,
    AlertDefinitionPagePresenter,
    AlertDefinitionPageView,
    AlertLogFilterDialogPresenter,
    AlertLogFilterDialogView,
    AlertLogFilterPresenter,
    AlertLogfilterView,
    AlertLogTable2Presenter,
    AlertLogTable2View,
    AlertLogPagePresenter,
    AlertLogPageView,
    MenuAddEditPresenter,
    MenuAddEditView,
    MenuListPresenter,
    MenuListView,
    SubmenuAddEditModalPresenter,
    SubmenuAddEditModalView,
    SubmenuListPresenter,
    SubmenuListView,
    MenuPagePresenter,
    MenuPageView,
    ReportAddEditPresenter,
    ReportAddEditView,
    ReportListPresenter,
    ReportListView,
    ReportGroupAddEditPresenter,
    ReportGroupAddEditView,
    ReportGroupListPresenter,
    ReportGroupListView,
    ReportDefinitionPagePresenter,
    ReportDefinitionPageView,
    AutoAssignPresenter,
    AutoAssignView,
    ConfirmDialogPresenter,
    ConfirmDialogView,
    MonthDaysPresenter,
    MonthDaysView,
    ShiftPresenter,
    ShiftView,
    TeamPresenter,
    TeamView,
    ShiftPagePresenter,
    ShiftPageView,
    TelegramBodyPresenter,
    TelegramBodyView,
    TelegramEditPresenter,
    TelegramEditView,
    TelegramListPresenter,
    TelegramListView,
    TelegramModificationPagePresenter,
    TelegramModificationPageView,
    GroupAddEditPresenter,
    GroupAddEditView,
    UserAddEditPresenter,
    UserAddEditView,
    UserPagePresenter,
    UserPageView,
    GetTelegramNameByIdPipe

  ],
  imports: [
    MaterialModule,
    DragDropModule,
    FormsModule,
    // MatGridListModule,
    // MatCardModule,
    // MatMenuModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    // MatExpansionModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatProgressSpinnerModule,
    // MatSelectModule,
    // MatDialogModule,
    // MatBottomSheetModule,
    // MatSnackBarModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatDividerModule,
    // MatAutocompleteModule,
    // MatChipsModule,
    // MatIconModule,
    // MatExpansionModule,
    // MatTooltipModule,

    BrowserAnimationsModule,

  ],
  exports: [
    LoginPagePresenter,
    TelegramLogPagePresenter,
    ArcFooterPresenter,
    ArcToolbarPresenter,
    ArcSidenavPresenter,
    AlertDefinitionPagePresenter,
    AlertLogPagePresenter,
    MenuPagePresenter,
    ReportDefinitionPagePresenter,
    ShiftPagePresenter,
    TelegramModificationPagePresenter,
    UserPagePresenter
    // SidenavComponent,
    //  ToolbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArcModule { }

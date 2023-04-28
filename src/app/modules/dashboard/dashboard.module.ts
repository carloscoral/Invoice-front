import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    IconsProviderModule,
  ]
})
export class DashboardModule { }

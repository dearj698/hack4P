import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TablesComponent } from './widgets/tables/tables.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardsComponent,
    PieComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardsComponent,
    PieComponent,
    TablesComponent
  ]
})
export class SharedModule { }

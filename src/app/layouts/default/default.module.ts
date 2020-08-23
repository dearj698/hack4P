import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {DashboardService} from '../../modules/dashboard.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }

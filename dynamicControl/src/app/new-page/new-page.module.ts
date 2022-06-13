import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPagePageRoutingModule } from './new-page-routing.module';

import { NewPagePage } from './new-page.page';
import { OppMetricDirective } from '../opp-metric.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPagePageRoutingModule
  ],
  declarations: [NewPagePage,
  OppMetricDirective]
})
export class NewPagePageModule {}

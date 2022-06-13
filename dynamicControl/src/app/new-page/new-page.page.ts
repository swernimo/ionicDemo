import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OppMetricDirective } from '../opp-metric.directive';
import { CosInputComponent } from '../cos-input/cos-input.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit, AfterViewInit {

  @ViewChild(OppMetricDirective) oppMetric!: OppMetricDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const viewContainerRef = this.oppMetric?.viewContainerRef;
    viewContainerRef?.clear();

    const componentRef = viewContainerRef?.createComponent<CosInputComponent>(CosInputComponent);
    if(componentRef) {
      // componentRef.instance.data = oppMetric.data;
      console.log();
    }
  }

}

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[oppMetric]'
})
export class OppMetricDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

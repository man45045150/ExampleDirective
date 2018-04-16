import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //set is keyword for excute by condition
  //naming property same selector
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //create view in viewContainer
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //remove everything from this place in the DOM
      this.vcRef.clear();
    }
  }

  //TemplateRef is what , ViewContainerRef is where
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

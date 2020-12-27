import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (condition) {
      this.vcRf.createEmbeddedView(this.templateRf);
    } else {
      this.vcRf.clear();
    }
  }
  constructor(
    private templateRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {}
}

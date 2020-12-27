import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultFontSize: string = "10px";

  @HostBinding("style.fontSize") fontSize: string = this.defaultFontSize;
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "#fff");
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "#000");
  }

  @HostListener("mouseenter") mouseenter() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "red");
    this.fontSize = this.defaultFontSize;
  }
  @HostListener("mouseleave") mouseleave(eventDta: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background",
      "orange"
    );
    this.fontSize = "10px";
  }
}

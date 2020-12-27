import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None, //no styles applied by Angular while Emulated is default
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() servElement: { type: string; name: string; content: string };
  @ViewChild("heading") heading: ElementRef;

  constructor() {
    console.log("constructor is called");
  }

  ngOnInit() {
    console.log("OnInit is called");
    console.log(
      "This is HTML Content  " + this.heading.nativeElement.textContent
    );
  }

  ngOnChanges() {
    console.log("OnChanges is called");
  }
  ngDoCheck() {
    console.log("ngDoCheck is called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit is called");
  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked is called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit is called");
    console.log(
      "This is HTML Content  " + this.heading.nativeElement.textContent
    );
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked is called");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy is called");
  }
}

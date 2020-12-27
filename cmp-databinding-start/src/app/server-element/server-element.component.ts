import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None, //no styles applied by Angular while Emulated is default
})
export class ServerElementComponent implements OnInit {
  @Input() servElement: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}
}

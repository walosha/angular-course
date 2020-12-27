import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  constructor() {}
  newServerName = "";
  newServerContent = "";

  ngOnInit() {}

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  onAddServer(nameInputValue: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInputValue.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }
}

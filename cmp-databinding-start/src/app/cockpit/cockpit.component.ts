import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() onServerAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() onBlueprintAdded = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();

  newServerName = "";
  newServerContent = "";
  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.onServerAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.onBlueprintAdded.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent,
    });
  }
}

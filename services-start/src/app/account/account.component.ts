import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {
  constructor(private accountsService: AccountsService) {}
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  onSetTo(status: string) {
    this.accountsService.changeStatus(this.id, status);
  }
}

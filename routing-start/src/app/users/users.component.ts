import { Component } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent {
  constructor(private router: Router) {}
  users = [
    {
      id: 1,
      name: "Max",
    },
    {
      id: 2,
      name: "Anna",
    },
    {
      id: 3,
      name: "Chris",
    },
  ];

  goToUser() {
    this.router.navigate(["users", 10, "wale"], {
      queryParams: { allEdit: "1", token: "Jsgh57eE554DxHF5ACD571GA" },
      fragment: "team",
    });
  }
}

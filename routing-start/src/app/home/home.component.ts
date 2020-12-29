import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService
  ) {}

  ngOnInit() {}

  goToUsers() {
    //Programmative Navigation
    // this.router.navigate(["users"]);
    //Programmative Navigation && relative route
    this.router.navigate(["users"], { relativeTo: this.route });
  }

  onLogin() {
    this.authservice.logIn();
  }

  onLogOut() {
    this.authservice.logOut();
  }
}

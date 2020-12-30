import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval } from "rxjs";
import { Observable, Observer, Subscription } from "rxjs/";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubscription: Subscription;
  mycustomSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const myNumber = interval(1000);
    this.numberSubscription = myNumber.subscribe((data: number) => {
      console.log(data);
    });
    const myObservable = Observable.create((observable: Observer<string>) => {
      setTimeout(() => observable.next("First Message"), 2000);
      setTimeout(() => observable.next("Second Message"), 4000);
      // setTimeout(() => observable.error("Error!!!"), 6000);
      setTimeout(() => observable.complete(), 8000);
      setTimeout(() => observable.next("Last Message"), 10000);
    });
    this.mycustomSubscription = myObservable.subscribe(
      (data: string) => console.log({ data }),
      (error: string) => console.log({ error }),
      () => console.log("completed")
    );
  }

  ngOnDestroy() {
    this.numberSubscription.unsubscribe();
    this.mycustomSubscription.unsubscribe();
  }
}

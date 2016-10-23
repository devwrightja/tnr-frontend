import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'tnr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tnr works!';

  constructor(private af: AngularFire) {
    const messages$ : FirebaseListObservable<any> = af.database.list('messages');

    messages$.subscribe(
      val => console.log(val)
    );
  }
}

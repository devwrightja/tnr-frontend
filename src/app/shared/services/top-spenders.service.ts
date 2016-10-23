import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class TopSpendersService {

  constructor(private af: AngularFire) { }

  getTopSpendersThisMonth() {
    const topSpenders$ : FirebaseListObservable<any[]> = this.af.database.list('October2016adcounts', {
      query: {
        orderByChild: 'count',
        limitToLast: 5
      }
    });
    return topSpenders$;
  }

}

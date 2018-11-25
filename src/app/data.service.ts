import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  constructor(private afs: AngularFirestore, public db: AngularFireDatabase) {
    //this.items = db.list('Periodic-Table').valueChanges();
    this.itemsCollection = afs.collection<any>('Periodic-Table');
    this.items = this.itemsCollection.valueChanges();
    console.log("Service loaded");
  }

  addElement(element: PeriodicElement) {
    this.itemsCollection.add(element);
    //this.element_data.push(element);
    //this.data.next(this.element_data);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from 'src/app/interface/models/expense';

@Injectable()
export class ExpenseService {
  Expense: Expense[];
  expenseChanged = new Subject<Expense[]>();

  constructor(private Db: AngularFirestore) {}

  Get() {
    this.Db.collection<Expense>('expense')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        })
      )
      .subscribe((expense: Expense[]) => {
        this.Expense = expense;
        this.expenseChanged.next([...this.Expense]);
      });
  }
}

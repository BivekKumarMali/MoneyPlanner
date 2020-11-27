import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  SetDateFormat(_adapter: any) {
    _adapter.setLocale('fr');
  }
}

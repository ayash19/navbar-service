import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  valid = new BehaviorSubject<boolean>(false);

  constructor() {
    this.valid;
  }

  getFormState(): Observable<boolean> {
    return this.valid.asObservable();
  }

  validateFormState(): void {
    this.valid.next(true);
  }

  inValidateFormState(): void {
    this.valid.next(false);
  }
}

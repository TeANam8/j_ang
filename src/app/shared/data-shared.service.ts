import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  message;
  messageSource= new BehaviorSubject("");
  currentMessage=this.messageSource.asObservable();
  constructor() { }
  setMessage(data){
    this.message=data;
    this.messageSource.next(this.message);
  }
}

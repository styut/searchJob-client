// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class userResumeService {
//   private countResume:number=0;

//   constructor() { }

//   setCount() {
//     this.countResume = parseInt(localStorage.getItem('userResume') || '') || 0;
//     this.countResume++; 
//     localStorage.setItem('userResume', this.countResume.toString());

//   }
// getCount(){
//     return this.countResume;

// }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userResumeService {
  private countResume: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  setCount() {
    let count = parseInt(localStorage.getItem('userResume') || '') || 0;
    count++;
    localStorage.setItem('userResume', count.toString());
    this.countResume.next(count);
  }

  getCount(): Observable<number> {
    return this.countResume.asObservable();
  }
}

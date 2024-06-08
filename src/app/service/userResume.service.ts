import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userResumeService {
  acountResume: number = parseInt(localStorage.getItem('userResume') || '0', 10); // קביעת הערך ההתחלתי ל־0 אם ה־LocalStorage ריק
  private countResume: BehaviorSubject<number> = new BehaviorSubject<number>(this.acountResume);
  cv:string[]=JSON.parse(localStorage.getItem('listCv') || '[]');
  private listCv: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.cv);

  constructor() { }

  setCount() {
    let count = parseInt(localStorage.getItem('userResume') || '0', 10); // קביעת הערך ההתחלתי ל־0 אם ה־LocalStorage ריק
    count++;
    localStorage.setItem('userResume', count.toString());
    this.countResume.next(count);
  }

  getCount(): Observable<number> {
    return this.countResume.asObservable();
  }

  setCv(job: string) {
    let listCVjobs: string[] = JSON.parse(localStorage.getItem('listCv') || '[]'); // קבלת הרשימה מה־LocalStorage והמרתה למערך
    listCVjobs.push(job);
    localStorage.setItem('listCv', JSON.stringify(listCVjobs)); // המרת המערך למחרוזת ושמירתו ב־LocalStorage
    this.listCv.next(listCVjobs); 
    //
  }

  getCv(): Observable<string[]> {
    return this.listCv.asObservable();
  }
}

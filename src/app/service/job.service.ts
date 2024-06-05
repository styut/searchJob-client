import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { map } from 'rxjs/operators';
import {jobField } from "../models/jobField";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class jobService {

  constructor(private http: HttpClient) { }
  jobFilter:Job[]=[];
  
  getAllJobs():Observable<Job[]>{
    return this.http.get<Job[]>('https://localhost:44337/api/jobs/GetAlljobs')
   
  }
  // filter(area:string,region:string): Observable<[]>{
  //  this.getAllJobs().subscribe(res=>{
  //   this.jobFilter=res;
  //  });
   
  // }
  // filter(filterData:any): Observable<Job[]> {
  //   console.log("sari");
    
  //   return this.getAllJobs().pipe(
  //     map(jobs => {
  //       // סינון המשרות על פי הפרמטרים area ו-region
  //       if (filterData.area && filterData.region) {
  //         return jobs.filter(job => job.jojbTitle === filterData.area && job.region === filterData.region);
  //       } else if (filterData.area) {
  //         return jobs.filter(job => job.jojbTitle === filterData.area);
  //       } else if (filterData.region) {
  //         return jobs.filter(job => job.region === filterData.region);
  //       } else {
  //         return jobs;
  //       }
  //     })
  //   );
  // }


  
  filter(job: string, jobs: Job[]): Job[] {
    console.log();
    const a=parseInt(job);
    return jobs.filter(p =>jobField[p.jobField].toString() === jobField[a].toString());
  }
}

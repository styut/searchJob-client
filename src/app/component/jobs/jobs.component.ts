
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { jobService } from "../../service/job.service";
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})

export class JobsComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute,private userService:jobService ){
  
  }


  listJobs: Job[] = [];
  selectedJob: Job | null = null;
  ngOnInit() {
   this.userService.getAllJobs().subscribe(res=>{
    this.listJobs=res;
   })
  }
  
  showDetails(job: Job) {
    this.selectedJob = job;
  }
}





 








  


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Job } from '../../models/job';
// import { jobService } from "../../service/job.service";

// @Component({
//   selector: 'app-jobs',
//   templateUrl: './jobs.component.html',
//   styleUrl: './jobs.component.css'
// })

// export class JobsComponent implements OnInit{
//   constructor(private router:ActivatedRoute, private route: ActivatedRoute,private jobservice:jobService ){
//     this.jobservice.getAllJobs().subscribe(res=> this.listJobs=res)
    
     
//   }
 
//   area:string="";
//   region:string="";
//   listJobs: Job[] = [];
//   // userResume:number=0;
//   listSearchResume:string[]=['dddddd','oo'];
//   index:number=1;
//   ngOnInit() {
//     this.router.params.subscribe(p=> {
//     this.region = p['region']
//     this.area = p['area'];
//     this.changeFilter({ filterReigon:this.region, filterArea:this.area})
//   })
// }
// viewJobs: Job[] = []

//   changeFilter($event:any){
//     this.jobservice.filter($event).subscribe(res => this.viewJobs = res)
      
    
//   }
//   selectedJob: Job | null = null;
  
//   showDetails(job: Job) {
//     this.selectedJob = job;
//   }
//   // updateResume($event:number){
//   // this.userResume=$event;
//   // }
//   addJobTOlist($event:string){
//     this.listSearchResume[this.index++]=$event;
//   }
// }

// ..................................
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { jobService } from "../../service/job.service";
import { log } from 'console';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute, 
    private jobService: jobService
  ) {}

  area: string = "";
  region: string = "";
  listJobs: Job[] = [];
  listSearchResume: string[] = ['dddddd', 'oo'];
  index: number = 1;

  // ngOnInit() {
  //   this.router.params.subscribe(p => {
  //     this.region = p['region'];
  //     // this.area = p['area'];
  //     this.changeFilter(this.region);
  //     // , filterArea: this.area 
  //   });
  // }
  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((res: Job[]) => {
      this.listJobs = res;
      this.router.params.subscribe(p => {
        this.region = p['region'];
        if (this.region != "allJobs")
          this.changeFilter(this.region);
      });
    });
  }

  changeFilter($event: any) {
    console.log("st");
    
    console.log($event);
    
    // this.jobService.filter($event).subscribe(res => this.listJobs = res);
    this.listJobs = this.jobService.filter($event, this.listJobs);
  }

  selectedJob: Job | null = null;

  showDetails(job: Job) {
    this.selectedJob = job;
  }
  // updateResume($event: number) {
   // Handle the event emitted by SingleJobComponent here
     // You can update the resume count or perform any other actions
  // }
}
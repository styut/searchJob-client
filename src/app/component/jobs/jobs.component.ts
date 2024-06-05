
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job';
import { jobService } from "../../service/job.service";
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private jobService: jobService
  ) { }

  area: string = "";
  region: string = "";
  listJobs: Job[] = [];
  index: number = 1;

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((res: Job[]) => {
      this.listJobs = res;
      this.router.params.subscribe(p => {
        this.region = p['region'];
        this.area = p['area'];
        if (this.region != "allJobs" && this.area != 'allJobs') {
          this.jobService.filterByAreaRegion({ "region": this.region, "area": this.area }).subscribe(res => this.listJobs = res);
        }
        else if (this.region != "allJobs") {
          console.log("kkkk");
          this.changeFilter(this.region);

        }
      });
    });
  }

  changeFilter($event: any) {
    console.log("st");
    console.log($event);
    this.listJobs = this.jobService.filter($event);
  }

  selectedJob: Job | null = null;

  showDetails(job: Job) {
    this.selectedJob = job;
  }

}
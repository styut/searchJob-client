
// // import { Component ,Input, EventEmitter, Output} from '@angular/core';
// // import { Job } from '../../models/job';
// // import { userResumeService } from "../../service/userResume.service";
// // @Component({
// //   selector: 'app-single-job',
// //   templateUrl: './single-job.component.html',
// //   styleUrl: './single-job.component.css'
// // })

// // export class SingleJobComponent {
 

// //   userResume:number=0;

// //   uploadedFiles: string[] = [];
// //   constructor(private ResumeService:userResumeService) {}
// //   addDetails(){

// //   }
// //   @Input()
// //   jobData:Job | null = null
 
// //   onFileSelected(event: any) {
// //     const file: File = event.target.files[0]; 
// //     this.uploadedFiles.push(file.name);
// //     //  this.userResume = Number.parseInt(localStorage.getItem('userResume')||0);
// //     this.ResumeService.setCount();
// //   }
 
// //   @Output()
// //   addJob:EventEmitter<string> = new EventEmitter<string>()
  
  
// // }


// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Job } from '../../models/job';
// import { userResumeService } from "../../service/userResume.service";

// @Component({
//   selector: 'app-single-job',
//   templateUrl: './single-job.component.html',
//   styleUrls: ['./single-job.component.css']
// })
// export class SingleJobComponent {
//   userResume: number = 0;
//   uploadedFiles: string[] = [];
//   showJobDetails: boolean = false;
//   listCVjobs: string[] = ['aaa','vvvv'];



//   constructor(private ResumeService: userResumeService) {}

//   @Input() jobData: Job | null = null;

//   onFileSelected(event: any) {
//     const file: File = event.target.files[0]; 
//     this.uploadedFiles.push(file.name);
//     this.ResumeService.setCount();
//     // this.ResumeService.setCv(file.name);

//   }

//   showDetails() {
//     this.showJobDetails = true;
//   }
// }
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job';
import { userResumeService } from "../../service/userResume.service";

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent {
  userResume: number = 0;
  uploadedFiles: string[] = [];
  showJobDetails: boolean = false;
  showPopUp: boolean = false;
  listCVjobs: string[] = [];

  constructor(private ResumeService: userResumeService) {}

  @Input() jobData: Job | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; 
    this.uploadedFiles.push(file.name);
    this.ResumeService.setCount();
  }

  showDetails() {
    this.showJobDetails = true;
  }

  openPopUp() {
    this.listCVjobs = JSON.parse(localStorage.getItem('listCv') || '[]');
    this.showPopUp = true;
  }
}

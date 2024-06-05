
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../../models/user";
import { jobField } from "../../models/jobField";
import { userResumeService } from "../../service/userResume.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-maain',
  templateUrl: './maain.component.html',
  styleUrls: ['./maain.component.css']
})

export class MaainComponent implements OnInit, OnDestroy {
  userResume: number = 4;
  user: User = { id: 0, username: '', password: '', jobSearchField: jobField.Client };
  username: string = '';
  listSearchResume: any[] = []
  userReigon: jobField = jobField.Client;
  subscription: Subscription = new Subscription();

  constructor(private userResumeService: userResumeService,) {}

  // ngOnInit() { 
  //   this.userResume=parseInt(localStorage.getItem('userResume') || '') ||0;
  //   const storedUser = localStorage.getItem('userConnect');
  //   if (storedUser) {
  //     this.user = JSON.parse(storedUser);
  //     this.userReigon = this.user.jobSearchField;
  //     this.username = this.user.username || 'אורח';
  //   } 
  //   else {
  //     window.location.href = "login";
  //     this.username = 'אורח';
  //   }
  //   this.subscription = this.userResumeService.getCount().subscribe(count => {
  //     this.userResume = count;
  //   });
  // }
  ngOnInit() { 
    const storedUserResume = localStorage.getItem('userResume');
    if (storedUserResume) {
        this.userResume = parseInt(storedUserResume) || 0;
    }
    const storedUser = localStorage.getItem('userConnect');
    if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.userReigon = this.user.jobSearchField;
        this.username = this.user.username || 'אורח';
    } 
    else {
        window.location.href = "login";
        this.username = 'אורח';
    }
    this.subscription = this.userResumeService.getCount().subscribe(count => {
        this.userResume = count;
    });
}


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateResume($event: number) {
    this.userResume = $event;
  }
  
  // if (!localStorage.getItem("userConnect")) {
    // window.location.href = "../login/login.component.html";
    
// }
}

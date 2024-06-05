
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {  User} from "../../models/user";
// @Component({
//   selector: 'app-maain',
//   templateUrl: './maain.component.html',
//   styleUrl: './maain.component.css'
// })
// export class MaainComponent implements OnInit {
//   userResume:number=0;

//   user: User = { id: 0, username: '', password: '', jobSearchField: '' }; // Not n
//   username: string = '';
 

//   constructor(private router: Router) {}
 
//   // ngOnInit() {
    
//   //   this.user = JSON.parse(localStorage.getItem('userConnect') || '{}');
//   //   this.username = this.user.username || 'אורח'; // אם אין שם משתמש, יוצג "אורח"


//   // }
//   ngOnInit() {
//     const storedUser = localStorage.getItem('userConnect');
//     if (storedUser) {
//       this.user = JSON.parse(storedUser);
//       this.username = this.user.username || 'אורח';
//     } else {
//       this.username = 'אורח';
//     }
//   }
  
//   updateResume($event:number){
//     this.userResume=$event;
//     }

 

// }


// ..................
import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import {  jobField} from "../../models/jobField";
@Component({
  selector: 'app-maain',
  templateUrl: './maain.component.html',
  styleUrls: ['./maain.component.css']
})
export class MaainComponent implements OnInit {
  userResume: number = 0;
  user: User = { id: 0, username: '', password: '', jobSearchField: jobField.Client };
  username: string = '';
  userReigon:jobField=jobField.Client;
  constructor() {}

  ngOnInit() {
    const storedUser = localStorage.getItem('userConnect');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.userReigon=this.user.jobSearchField;
      this.username = this.user.username || 'אורח';
    } else {
      this.username = 'אורח';
    }
  }
  
  updateResume($event: number) {
    this.userResume = $event;
  }
}

